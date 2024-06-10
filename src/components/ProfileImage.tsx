import React from 'react';
import {Image} from 'react-native';
import styles from '../styles/profileStyles';

interface ProfileImageProps {
  imageUrl: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({imageUrl: _imageUrl}) => {
  return (
    <Image
      source={{uri: 'https://avatars.githubusercontent.com/u/8147523?v=4'}} // Keep this hardcoded or replace with logic that uses _imageUrl
      style={styles.profileImage}
    />
  );
};

export default ProfileImage;
