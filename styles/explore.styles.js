import styled from 'styled-components';

export const ExplorePageContainer = styled.div`
  height: 100%;
  overflow-y: scroll;
  background: #fff;
  width: 100%;
`;

export const ContentPageContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;

  .category-container {
    // position: sticky
    display: grid;
    grid-gap: 1rem;
  }

  .cards-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .search-content {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .search-icon {
    height: 20px;
    width: 20px;
    margin-right: 0.5rem;
    color: var(--main-gray);
  }

  .search-container {
    display: flex;
    align-items: center;
    margin: 0;
    align-items: flex-start;
    justify-content: start;
    padding: 0.5rem 1rem;
    border: 1px solid var(--main-border);
    border-radius: 0.7rem;
    background-color: var(--main-background);
  }

  .search-input {
    border: none;
    outline: none;
    width: 100%;
    background-color: transparent;
    font-size: 1rem;

    ::placeholder {
      color: var(--main-gray);
    }
  }

  .text-position {
    color: var(--main-black);
  }

  .rectangle-container {
    width: 100%;
    height: 11.5rem;
    background: #d9d9d9;
    border-radius: 7px;

    @media (min-width: 475px) {
      height: 15.5rem;
    }
  }

  .banner-img {
    border-radius: 7px;
  }

  .tab-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .selected-tab {
    font-size: 14px;
    font-weight: 600;
    color: var(--main-indigo);
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--main-indigo);
  }

  .select-tab {
    font-size: 14px;
    font-weight: 400;
    color: var(--main-indigo);
    padding-bottom: 0.6rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--main-border);

  .search-input {
    height: 24px;
    font-size: 16px;
    line-height: 24px;
    color: #666666;
    flex: none;
    flex-grow: 1;
    border: none;
    outline: none;

    ::placeholder {
      color: var(--main-gray);
    }
  }
`;

export const ExploreCardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 25px;
`;

export const CardContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 145px;
  border: 1px solid var(--main-border);
  border-radius: 12px;
  overflow: hidden;
  // padding: 0.5rem;
  margin: 1rem 0;

  @media (min-width: 475px) {
    height: 180px;
  }

  .img-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0.1rem;
    object-fit: cover;
    margin-bottom: 0.8rem;
    height: 80px;

    @media (min-width: 475px) {
      height: 110px;
      margin-bottom: 1rem;
    }

    @media (min-width: 640px) {
      height: 100px;
      margin-bottom: 1rem;
    }
  }

  .experts-img-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0.1rem;
    object-fit: cover;
    margin-top: 1rem;

    @media (min-width: 475px) {
      margin-top: 1.5rem;
    }
  }

  .img {
    background: var(--main-gray);
    // border-radius: 4px;
  }

  .details-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0.5rem;

    @media (min-width: 475px) {
      margin: 0.8rem 0.5rem;
    }
  }

  .details-wrapper {
    display: grid;
    grid-template-rows: auto 0.5fr;
  }

  .category-title {
    font-size: 12px;
    font-weight: 600;
    color: var(--main-black);
    margin-bottom: 0.2rem;
  }

  .experts-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  .num-of-experts {
    padding-right: 0.5rem;
    font-family: none;
    font-size: 10px;
    color: rgba(0, 20, 51, 0.5);
  }

  .experts-avatars {
    display: flex;
    flex-direction: row;
    padding-right: 0.5rem;
  }

  .avatar-details {
    display: flex;
  }

  .user-avatar-wrapper {
    margin-right: 0.5rem;
  }

  .avatar {
    background: var(--main-gray);
    border: 1px solid #ffffff;
    margin: 0px -4px;
  }

  .ellipse {
    width: 4px;
    height: 4px;
    background: #d0d0d0;
    border-radius: 50%;
    margin-right: 0.3rem;
  }

  .num-of-posts {
    font-family: none;
    font-size: 10px;
    letter-spacing: -0.408px;
    color: rgba(0, 20, 51, 0.5);
  }

  .follow-btn-container {
    display: flex;
    justify-content: center;
    padding: 10px;
    width: 100px;
    height: 40px;
    background: rgba(0, 20, 51, 0.1);
    border-radius: 8px;
    cursor: pointer;
  }

  .follow-btn-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
  }

  .follow-all {
    font-size: 13px;
    letter-spacing: -0.408px;
    color: var(--main-black);
  }
`;

export const CategoryPostsLgContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
`;

export const CategoryPostsContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  .banner-img {
    position: relative;
  }

  .back-icon {
    position: absolute;
    top: 0.5rem;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 0.5rem;
    margin-top: -1rem;
  }

  .title {
    color: var(--main-black)
    font-size: 14px;
    font-weight: 600;
  }

  .details-container {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .ellipse {
    width: 4px;
    height: 4px;
    background: #d0d0d0;
    border-radius: 50%;
    margin-right: 0.3rem;
  }

  .details {
    color: var(--main-gray);
    font-size: 12px;
  }

  .follow-btn-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-contents: center;
    gap: 4px;
    background: rgba(0, 20, 51, 0.1);
    padding: 10px 15px;
    width: 100px;
    height: 35px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 0.5rem;
  }

  .follow-all {
    font-size: 13px;
    letter-spacing: -0.408px;
    color: var(--main-black);
  }

  .tags-container{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 0.5rem;
    margin: 0 0.5rem;
  }

  .tags {
    border: 1px solid var(--main-border);
    border-radius: 0.5rem;
    color: var(--main-black);
    padding: 0.1rem 0.5rem;
    font-size: 14px;
  }

  .tab-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 0.5rem;
  }

  .selected-tab {
    font-size: 14px;
    font-weight: 600;
    color: var(--main-indigo);
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--main-indigo);
  }

  .select-tab {
    font-size: 14px;
    font-weight: 400;
    color: var(--main-indigo);
    padding-bottom: 0.6rem;
  }
`;

export const CategoryThumbnailContainer = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  margin: 0 0.5rem;
  margin-bottom: 1rem;
  margin-top: -1rem;

  .thumbnail-card {
    width: 100%;
    height: 15rem;
    border-radius: 1rem;
    background: #262626;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .story_card_image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .story-card-text {
    font-size: 2.4rem;
    color: #ffffff;
    font-weight: 400;
    text-align: center;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    max-width: 90%;
  }

  .story_card_avatar {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #780206; /* fallback for old browsers */
    border: 2px solid -webkit-linear-gradient(to right, #061161, #780206); /* Chrome 10-25, Safari 5.1-6 */
    border: 2px solid linear-gradient(to right, #061161, #780206); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
`;
