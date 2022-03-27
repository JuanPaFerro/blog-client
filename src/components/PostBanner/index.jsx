import React from "react";
import {
  Banner,
  BannerInfoContainer,
  Container,
  PostAuthorContainer,
  PostTitle,
  UserImage,
  UserName,
} from "./PostBanner";
import DefaultPostImage from "../../assets/post.jpg";
import DefaultAuthorImage from "../../assets/user.png";
import { useGetAllPosts } from "../../hooks/useGetAllPosts";

const PostBanner = () => {
  const { firstPost } = useGetAllPosts();
  const publicFiles = "http://localhost:5000/images/";

  return (
    <Container>
      <Banner
        to={`/post/${firstPost._id}`}
        background={
          firstPost.photo ? publicFiles + firstPost.photo : DefaultPostImage
        }
      >
        <BannerInfoContainer>
          <PostTitle>{firstPost.title}</PostTitle>
          {firstPost.user ? (
            <PostAuthorContainer>
              <UserImage
                src={firstPost.user[0].profilePic || DefaultAuthorImage}
              />
              <UserName>{firstPost.user[0].username}</UserName>
            </PostAuthorContainer>
          ) : (
            ""
          )}
        </BannerInfoContainer>
      </Banner>
    </Container>
  );
};

export default PostBanner;
