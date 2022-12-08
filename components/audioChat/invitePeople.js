import { ArrowBackIos } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { inviteParticipant } from '../../audiorooms-client';
import { API_URL } from '../../constants/api';
import store from '../../store';
//import { ElipsDot } from '../messenger/gen.styles'; todo not yet imported
import { BriefUserDetails, LiveRoomFooter } from './liveRoom';
import SearchBar from './searchBar';
import styles from './audioChat.module.css';

export const toggleInviteLoader = (loading, id) => {
  // show loader while waiting for user to accept call
  if (loading) {
    document
      .getElementById('invite-loader' + id)
      .classList.remove('hide-invite');
    document.getElementById('invite-btn' + id).classList.add('hide-invite');
  } else {
    document.getElementById('invite-loader' + id).classList.add('hide-invite');
    document.getElementById('invite-btn' + id).classList.remove('hide-invite');
  }
};

const InvitePeople = ({ setSegment, user, animate }) => {
  const [searchInvoked, setSearchInvoked] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const room = store.getState().audioRoom.room;

  const searchInvoke = async (event) => {
    // TODO: implement search functionality
    axios
      .get(`${API_URL}/experts/search?query=${event.target.value}`)
      .then((_results) => {
        setSearchResults(_results.data);
      });
  };

  const _invite = async (_invitedUser) => {
    try {
      const audioElement = document.getElementById('audio-chatroom-element');
      toggleInviteLoader(true, _invitedUser._id);
      await inviteParticipant(room, _invitedUser, 'Audience', false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const _goBack = () => {
    setSegment('live');
  };

  useEffect(() => {
    // fetch experts from the db
  }, []);

  return (
    <section className={`${styles['audio-chat-segment']} ${styles['invite-segment']}`}>
      <div className={`${styles['audio-chat-header2']} ${styles['invite-participants-header']}`}>
        <ArrowBackIos onClick={_goBack}></ArrowBackIos>
        <div>
          <h2 className="">Invite People</h2>
          <p className={styles['audio-chat-instructions']}>
            People will join as listeners first
          </p>
        </div>
      </div>
      <div className={`${styles['audio-chat-body']} ${styles['invite-participants-body']}`}>
        <SearchBar>
          <input
            placeholder="Search for people"
            type="text"
            onFocus={() => setSearchInvoked(true)}
            onChange={(e) => searchInvoke(e)}
          />
        </SearchBar>

        {!searchInvoked ? (
          <div className={`${styles['audio-chat-inner-body']} ${styles['invite-participants-list']}`}>
            {searching ? (
              <p>Loading...</p>
            ) : (
              /* <ElipsDot className={styles['mt-10']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </ElipsDot> */
              <p className="text-center ">
                Type hint in searchbar to find users.
              </p>
            )}
          </div>
        ) : (
          <>
            <button
              className={`${styles['btn']} ${styles['chatroom-close-search']}`}
              onClick={() => {
                setSearchInvoked(false);
              }}
            >
              Back to List
            </button>
            <div className={`${styles['audio-chat-inner-body']} ${styles['invite-participants-list']}`}>
              {searchResults.map((_user) => (
                <div key={_user._id}>
                  <BriefUserDetails user={_user} />
                  <button
                    id={'invite-btn' + _user._id}
                    className={`${styles['btn']} ${styles['participant-invite-btn']}`}
                    onClick={() => _invite(_user)}
                  >
                    INVITE
                  </button>
                  <p>loading...</p>
                  {/* <ElipsDot
                    className={`${styles['mt-10']} ${styles['hide-invite']}`}
                    id={'invite-loader' + _user._id}
                  >
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </ElipsDot> */}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <LiveRoomFooter animate={animate} setSegment={setSegment} />
    </section>
  );
};

export default InvitePeople;
