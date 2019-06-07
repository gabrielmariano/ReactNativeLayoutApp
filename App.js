
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { isPatternLike } from '@babel/types';
import LineGradiant from 'react-native-linear-gradient';





export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.perfil}>MEU PERFIL</Text>




        <Image resizeMode="contain" source={require('./images/menu.png')}
          style={{
            height: 30,
            width: 30,
            marginLeft: -285,
            marginTop: -37,
          }} />
        <Image resizeMode="contain" source={require('./images/bright.png')}
          style={{
            height: 25,
            width: 25,
            marginLeft: 287,
            marginTop: -28,
          }} />
        <View style={styles.line} />




        <View style={styles.box}>



          <View
            colors={['#7F38F4', '#F22B48']}
            style={styles.purple}>
            <Image resizeMode="contain" source={require('./images/ic_yoga.png')}
              style={{
                marginTop: 17,
                marginLeft: 9,
              }} />


          </View>

          <View
            colors={['#7F38F4', '#F22B48']}
            style={styles.purple1}>
            <Image resizeMode="contain" source={require('./images/ic_upper_body.png')}
              style={{
                marginTop: 10,
                marginLeft: 11,
              }} />


          </View>

          <View
            colors={['#7F38F4', '#F22B48']}
            style={styles.purple2}>
            <Image resizeMode="contain" source={require('./images/ic_yoga.png')}
              style={{
                marginTop: 18,
                marginLeft: 11,
              }} />

          </View>


          <View
            colors={['#7F38F4', '#F22B48']}
            style={styles.purple3}>
            <Image resizeMode="contain" source={require('./images/ic_lower_body.png')}
              style={{
                marginTop: 10,
                marginLeft: 11,
              }} />

          </View>



          <View
            colors={['#7F38F4', '#F22B48']}
            style={styles.purple4}>
            <Image resizeMode="contain" source={require('./images/ic_dance.png')}
              style={{
                marginTop: 10,
                marginLeft: 20,
              }} />

          </View>
          <Image resizeMode="contain" source={require('./images/check.png')}
            style={{
              height: 13,
              width: 13,
              marginLeft: 67,
              marginTop: -50,
            }} />

          <Image resizeMode="contain" source={require('./images/check.png')}
            style={{
              height: 13,
              width: 13,
              marginLeft: 198,
              marginTop: -13,
            }} />


        </View>



        <View style={styles.box1}>
          <Text style={styles.conteudo}>CORRIDA</Text>
          <View style={styles.circle} />
          <Image resizeMode="contain" source={require('./images/running.png')} style={styles.corrida} />
          <Image resizeMode="contain" source={require('./images/ic_bike.png')} style={styles.bike} />
          <Image resizeMode="contain" source={require('./images/ic_time.png')} style={styles.time} />
          <Image resizeMode="contain" source={require('./images/ic_balance.png')} style={styles.balance} />
          <Text style={styles.kcal}>400 Kcal</Text>
          <View style={styles.column} />
          <Text style={styles.time1}>30 m</Text>
          <View style={styles.column1} />
          <Text style={styles.peso}>52 Kg</Text>
          <View style={styles.hoje} />
          <Text style={styles.hojetxt}>HOJE</Text>
          <View style={styles.ontem} />
          <Text style={styles.ontemtxt}>ONTEM</Text>
        </View>




        <View style={styles.box1}>
          <Text style={styles.conteudo}>BICICLETA</Text>
          <View style={styles.circle} />
          <Image resizeMode="contain" source={require('./images/cycling.png')} style={styles.bicicleta} />
          <Image resizeMode="contain" source={require('./images/ic_bike.png')} style={styles.bike} />
          <Image resizeMode="contain" source={require('./images/ic_time.png')} style={styles.time} />
          <Image resizeMode="contain" source={require('./images/ic_balance.png')} style={styles.balance} />
          <Text style={styles.kcal}>630 Kcal</Text>
          <View style={styles.column} />
          <Text style={styles.time1}>40 m</Text>
          <View style={styles.column1} />
          <Text style={styles.peso}>52 Kg</Text>
          <View style={styles.hoje1} />
          <Text style={styles.hojetxt}>HOJE</Text>
          <View style={styles.ontem} />
          <Text style={styles.ontemtxt}>ONTEM</Text>
        </View>


        <View style={styles.box1}>
          <Text style={styles.conteudo}>MUSCULAÇÃO</Text>
          <View style={styles.circle} />
          <Image resizeMode="contain" source={require('./images/gym.png')} style={styles.musculacao} />
          <Image resizeMode="contain" source={require('./images/ic_bike.png')} style={styles.bike} />
          <Image resizeMode="contain" source={require('./images/ic_time.png')} style={styles.time} />
          <Image resizeMode="contain" source={require('./images/ic_balance.png')} style={styles.balance} />
          <Text style={styles.kcal}>950 Kcal</Text>
          <View style={styles.column} />
          <Text style={styles.time1}>1 h</Text>
          <View style={styles.column1} />
          <Text style={styles.peso}>52 Kg</Text>
          <View style={styles.hoje} />
          <Text style={styles.hojetxt}>HOJE</Text>
          <View style={styles.ontem} />
          <Text style={styles.ontemtxt}>ONTEM</Text>
        </View>



        <View style={styles.box2}>
          <Text style={styles.conteudo}>YOGA</Text>
          <View style={styles.circle} />
          <Image resizeMode="contain" source={require('./images/yoga.png')} style={styles.yoga} />
          <Image resizeMode="contain" source={require('./images/ic_bike.png')} style={styles.bike1} />
          <Image resizeMode="contain" source={require('./images/ic_time.png')} style={styles.time} />
          <Image resizeMode="contain" source={require('./images/ic_balance.png')} style={styles.balance} />
          <Text style={styles.kcal}>200 Kcal</Text>
          <View style={styles.column} />
          <Text style={styles.time1}>80 m</Text>
          <View style={styles.column1} />
          <Text style={styles.peso}>52 Kg</Text>
          <View style={styles.hoje} />
          <Text style={styles.hojetxt}>HOJE</Text>
          <View style={styles.ontem1} />
          <Text style={styles.ontemtxt}>ONTEM</Text>
        </View>
      </View>
    );
  }


}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#262F38',
  },
  line: {
    height: 1,
    width: 300,
    alignItems: "center",
    marginTop: 15,
    backgroundColor: "#8383836b",
  },
  View: {
    width: 55,
    height: 55,
    marginTop: -55,
    borderRadius: 100,
    marginLeft: 90,
  },
  purple: {
    width: 55,
    height: 55,
    marginTop: 11,
    borderRadius: 100,
    marginLeft: 25,
    backgroundColor: "#7F38F4",
  },

  purple1: {
    width: 55,
    height: 55,
    marginTop: -55,
    borderRadius: 100,
    marginLeft: 90,
    backgroundColor: "#7F38F4",
  },
  purple2: {
    width: 55,
    height: 55,
    marginTop: -55,
    borderRadius: 100,
    marginLeft: 285,
    backgroundColor: "#7F38F4",
  },
  purple3: {
    width: 55,
    height: 55,
    marginTop: -55,
    borderRadius: 150,
    marginLeft: 155,
    backgroundColor: "#7F38F4",
  },
  purple4: {
    width: 55,
    height: 55,
    marginTop: -55,
    borderRadius: 100,
    marginLeft: 220,
    backgroundColor: "#7F38F4",
  },
  perfil: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FEFFFF',
    marginTop: 17,
    fontFamily: 'Montserrat-Regular',
  },
  box: {
    width: 300,
    height: 79,
    backgroundColor: "#323C43",
    marginTop: 11,
    borderRadius: 10,


  },
  box1: {
    width: 300,
    height: 100,
    backgroundColor: "#323C47",
    marginTop: 25,
    borderRadius: 10,
  },
  corrida: {
    marginTop: -95,
    marginLeft: 5,
    height: 105,
  },
  bicicleta: {
    marginTop: -115,
    marginLeft: -3,
    height: 127,
  },
  musculacao: {
    marginTop: -117,
    marginLeft: 3,
    height: 129,
  },
  yoga: {
    marginTop: -100,
    marginLeft: 18,
    height: 120,
  },
  bike: {
    marginLeft: 130,
    marginTop: -50,
    height: 13,

  },
  bike1: {
    marginLeft: 130,
    marginTop: -60,
    height: 13,
  },
  kcal: {
    marginLeft: 145,
    fontSize: 8,
    marginTop: -12,
    color: "#FEFFFF",
  },
  column: {
    height: 14,
    width: 1,
    marginLeft: 177,
    marginTop: -13,
    backgroundColor: "#8383836b",
  },
  time: {
    marginLeft: 184,
    marginTop: -13,

  },
  time1: {
    marginLeft: 197,
    fontSize: 8,
    color: "#FEFFFF",
    marginTop: -12,
  },
  column1: {
    height: 14,
    width: 1,
    marginLeft: 220,
    marginTop: -13,
    backgroundColor: "#8383836b",
  },
  balance: {
    marginLeft: 229,
    marginTop: -13,

  },
  peso: {
    marginLeft: 245,
    fontSize: 8,
    marginTop: -11,
    color: "#FEFFFF",

  },
  hoje: {
    height: 15,
    width: 45,
    marginLeft: 130,
    marginTop: 8,
    backgroundColor: "#323C47",
    borderRadius: 100,
    borderColor: "#8383836b",
    borderWidth: 1,
  },
  hojetxt: {
    fontSize: 8,
    marginLeft: 142,
    marginTop: -13,
    color: "#FEFFFF",

  },
  hoje1: {
    height: 15,
    width: 45,
    marginLeft: 130,
    marginTop: 10,
    backgroundColor: "#FD3C29",
    borderRadius: 100,
  },
  ontem: {
    height: 15,
    width: 60,
    marginLeft: 182,
    marginTop: -13,
    backgroundColor: "#323C47",
    borderRadius: 100,
    borderColor: "#8383836b",
    borderWidth: 1,
  },
  ontemtxt: {
    fontSize: 8,
    marginLeft: 197,
    marginTop: -13,
    color: "#FEFFFF",
  },
  ontem1: {
    height: 15,
    width: 60,
    marginLeft: 182,
    marginTop: -13,
    backgroundColor: "#19B996",
    borderRadius: 100,
  },
  circle: {
    width: 78,
    height: 78,
    backgroundColor: "#262F38",
    marginTop: -33,
    borderRadius: 100,
    marginLeft: 20,
  },

  box2: {
    width: 300,
    height: 100,
    backgroundColor: "#323C47",
    marginTop: 25,
    borderRadius: 10,

  },
  conteudo: {
    fontSize: 20,
    color: '#FEFFFF',
    marginTop: 17,
    marginLeft: 128,
  },
});

