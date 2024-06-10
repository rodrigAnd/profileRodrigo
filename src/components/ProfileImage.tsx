import React from 'react';
import {Image} from 'react-native';
import styles from '../styles/profileStyles';

interface ProfileImageProps {
  imageUrl: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({imageUrl: _imageUrl}) => {
  return (
    <Image
      source={{uri: 'https://media.licdn.com/dms/image/C4D03AQEZfghhp1hKsw/profile-displayphoto-shrink_400_400/0/1600370469022?e=1723680000&v=beta&t=BpQmIszmpa9B0JeTKV_53qtLPfk0GWebIZwRf1DQwsw'}} // Keep this hardcoded or replace with logic that uses _imageUrl
      style={styles.profileImage}
    />
  );
};

export default ProfileImage;
