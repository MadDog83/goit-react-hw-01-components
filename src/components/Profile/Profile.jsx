import React from 'react';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  width: 350px;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 5px 5px 16px 3px rgba(196, 195, 222, 0.75);
  background-color: #FF8;
`;

const Description = styled.div`
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
`;

const Avatar = styled.img`
  margin-right: 20px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Name = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
`;

const Tag = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  color: #898f98;
`;

const Location = styled.p`
  font-size: 14px;
  color: #898f98;
`;

const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding-left: 6px;
  padding-right: 6px;
`;

const StatItem = styled.li`
display: flex;
flex-direction: column;
border-radius: 12px;
box-shadow: 12px 12px 11px 4px rgba(209, 218, 232, 3.75);
width: 100px;
height: 60px;
justify-content: space-around;
align-items: center;
background-color: #ede7de;
&:hover {
  color: #fff;
  background-color:#1245;
}
&:focus {
   color: #fffg;
  }
`;

const Label = styled.span`
  font-size: 14px;
  color: #898f98;
  padding-right: 5px;
`;

const Quantity = styled.span`
  font-size: 14px;
  color: #122236;
  font-weight: 700;
`;

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrapper className="profile">
      <Description className="description">
        <Avatar className="avatar" src={avatar} alt="User avatar" />
        <Name className="name">{username}</Name>
        <Tag className="tag">@{tag}</Tag>
        <Location className="location">{location}</Location>
      </Description>

      <Stats className="stats">
        <StatItem className="stat-item">
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{stats.followers}</Quantity>
        </StatItem>
        <StatItem className="stat-item">
          <Label className="label">Views</Label>
          <Quantity className="quantity">{stats.views}</Quantity>
        </StatItem>
        <StatItem className="stat-item">
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{stats.likes}</Quantity>
        </StatItem>
      </Stats>
    </ProfileWrapper>
  );
};

export default Profile;