import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { IoMdClose } from 'react-icons/io';
import useSWR from 'swr';
import { API_URL } from '../../../../constants/api';
import { FindUserContainer } from '../../../../styles/share.styles';
import XxsAvatar from '../../avatars/XxsAvatar';
import { TextBase, TextSm, TextXS, TextxS } from '../../typography/Typography';

const UserCard = ({ searchUser, setSelectedUser, selectedUser }) => {
  const selected = selectedUser.find((slug) => slug === searchUser.slug);

  const select = () => {
    !selected
      ? setSelectedUser((prev) => [...prev, searchUser.slug])
      : setSelectedUser((prev) => [
          ...prev.filter((unSelect) => unSelect !== searchUser.slug),
        ]);
  };

  return (
    <div className="user-container" onClick={select}>
      <div className="user-flex">
        <XxsAvatar src={searchUser?.imageUrl?.cdnUrl} alt="profile " />

        <div className="user-name">
          <TextSm>
            {searchUser.profile.firstName}
            {'  '}
            {searchUser.profile.lastName}
          </TextSm>
          <TextxS> focus on {searchUser?.expertCategories[0]}</TextxS>
        </div>
        {/* )} */}
      </div>

      <div className="checkbox-wrapper">
        <input type="checkbox" checked={selected} readOnly />
      </div>
    </div>
  );
};

const UserTag = ({ userSelect, setSelectedUser }) => {
  return (
    <div
      className="user-tag"
      onClick={() =>
        setSelectedUser((prev) => [
          ...prev.filter((unSelect) => unSelect !== userSelect),
        ])
      }
    >
      <TextXS>{userSelect}</TextXS>
      <IoMdClose className="tag-icon" />
    </div>
  );
};

function UserSearch({ setSelectedUser, selectedUser }) {
  const [search, setSearch] = useState([]);
  const [cookies] = useCookies(['user']);
  // const [{ token }] = useCookies(['token']);
  const slug = cookies?.user?.slug;
  const url = `${API_URL}/feed/recent-messaged-users/${slug}`;
  const { data: conversationUsers } = useSWR(url);

  const conversationUser = useCallback(() => {
    conversationUsers?.forEach((friendSlug) => {
      if (friendSlug !== null) {
        const userUrl = `${API_URL}/getExpertDetail/${friendSlug}`;
        axios.get(userUrl).then((convUser) => {
          setSearch((prev) => {
            const index = prev.findIndex(
              (object) => object.slug === convUser.data.data.slug
            );
            if (index === -1) {
              return [...prev, convUser.data.data];
            } else {
              return prev;
            }
          });
        });
      }
    });
  }, [conversationUsers]);

  const CancelToken = axios.CancelToken;
  let cancel;

  const searchInvoke = async (e) => {
    if (cancel) {
      cancel('Operations cancelled due to new request');
    }

    let results;

    try {
      if (e.target.value && e.target.value.length >= 1) {
        results = await axios.get(
          `${API_URL}/getExpertsListingByKeyword/&${e.target.value}`,
          {
            cancelToken: new CancelToken(function executor(c) {
              cancel = c;
            }),
          }
        );
      } else {
        setSearch([]);
        conversationUser();
      }
    } catch (e) {
      return e;
    }

    if (results?.data.length > 0) {
      setSearch(results?.data);
    } else {
      setSearch([]);
      conversationUser();
    }
  };

  useEffect(() => {
    conversationUser();
  }, [conversationUser]);

  return (
    <FindUserContainer>
      <div className="user-search-container">
        <TextBase>to: </TextBase>
        <div className="search-tag-container">
          {selectedUser.map((userSelect) => (
            <UserTag
              key={userSelect?._id}
              userSelect={userSelect}
              setSelectedUser={setSelectedUser}
            />
          ))}
          <input
            type="text"
            className="share-search-input"
            placeholder="search..."
            onChange={searchInvoke}
          />
        </div>
      </div>
      <div className="user-list-container">
        {search.map((searchUser) => (
          <UserCard
            key={searchUser?._id}
            searchUser={searchUser}
            setSelectedUser={setSelectedUser}
            selectedUser={selectedUser}
          />
        ))}
      </div>
    </FindUserContainer>
  );
}

export default UserSearch;
