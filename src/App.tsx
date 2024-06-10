import React from 'react';
import {Linking, ScrollView, Text} from 'react-native';
import ProfileImage from './components/ProfileImage';
import styles from './styles/profileStyles';
import BioText from './components/BioText';
import SocialButton from './components/SocialButton';
import ServiceCard from './components/ServiceCard';

const App: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfileImage imageUrl="https://avatars.githubusercontent.com/u/8147523?v=4" />
      <Text style={styles.name}>Rodrigo Guilherme</Text>
      <BioText
        text="No Itaú Unibanco, 
        estou comprometido com a criação de soluções mobile que transformam a experiência bancária dos nossos clientes. 
        Com mais de dois anos nesta função, especializei-me em programação Kotlin e arquitetura MVVM, utilizando Coroutines para eficiência em operações assíncronas e entregando projetos ágeis e de alta qualidade.
        Minha passagem pela Capco, como Consultor Associado, 
        consolidou minhas competências em soluções tecnológicas para o setor financeiro. Trabalhando em equipe, somos capazes de superar as expectativas dos clientes, graças ao nosso foco contínuo em qualidade e inovação. No Itaú Unibanco, esses valores guiam meu trabalho diário, enquanto busco sempre aprimorar as funcionalidades e a segurança dos aplicativos que desenvolvo."
      />
      <SocialButton
        title="GitHub"
        onPress={() => Linking.openURL('https://github.com/rodrigAnd')}
        color="#007AFF"
      />

      <SocialButton
        title="LinkedIn"
        onPress={() =>
          Linking.openURL('https://www.linkedin.com/in/rodrigo-guilherme-002391131/')
        }
        color="#6D41F8"
      />
      <ServiceCard />
      <Text style={styles.quote}>
        "Sonhe grande e se atreva a falhar."" - Norman Vaughan
      </Text>
    </ScrollView>
  );
};

export default App;
