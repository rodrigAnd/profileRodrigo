// ProfileScreen.tsx
import React from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from '../styles/profileStyles';

const ProfileScreen = () => {
  const handlePress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>Rodrigo Guilherme</Text>
      <Text style={styles.bio}>
      No Itaú Unibanco, estou comprometido com a criação de soluções mobile que transformam a 
      experiência bancária dos nossos clientes. Com mais de dois anos nesta função, especializei-me em programação Kotlin e arquitetura MVVM, utilizando Coroutines para eficiência em operações assíncronas 
      e entregando projetos ágeis e de alta qualidade.
      Minha passagem pela Capco, 
      como Consultor Associado, consolidou minhas competências em soluções 
      tecnológicas para o setor financeiro. Trabalhando em equipe, 
      somos capazes de superar as expectativas dos clientes, graças ao nosso foco contínuo em qualidade e inovação. No Itaú Unibanco, esses valores guiam meu trabalho diário, enquanto busco sempre aprimorar as funcionalidades e a segurança dos aplicativos que desenvolvo.
      </Text>

      <View style={styles.linksContainer}>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="GitHub Profile"
          style={styles.button}
          onPress={() => handlePress('https://github.com/rodrigAnd')}>
          <Text style={styles.buttonText}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            handlePress('https://www.linkedin.com/in/your-profile')
          }>
          <Text style={styles.buttonText}>LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('https://wa.me/your-whatsapp-number')}>
          <Text style={styles.buttonText}>WhatsApp</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('https://twitter.com/your-profile')}>
          <Text style={styles.buttonText}>X (Twitter)</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.quote}>
        "Sonhe grande e se atreva a falhar."" - Norman Vaughan
      </Text>
    </ScrollView>
  );
};

export default ProfileScreen;
