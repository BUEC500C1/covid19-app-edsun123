/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import MapView from 'react-native-maps'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

var json;

export default class App extends Component<Props> { 
    
    constructor(props) {
        super(props);
        this.state = {
          markers: [{
            coordinates: {
              latitude: 42.33,
              longitude:-71.08
            }
          },
          { 
            
            coordinates: {
              latitude: 42.16,
              longitude: -71.21
            }  
          },
        { 
            coordinates: {
              latitude: 42.49,
              longitude:-71.39
            }  
          },
                            { 
            coordinates: {
              latitude: 47.49,
              longitude: -121.83
            }  
          },
                    { 
            coordinates: {
              latitude: 42.37,
              longitude: -73.21
            }  
          },
                            { 
            coordinates: {
              latitude: 43.94,
              longitude: -71.82
            }  
          },
                            { 
            coordinates: {
              latitude: 42.98,
              longitude: -71.13
            }  
          },
                            { 
            coordinates: {
              latitude: 40.96,
              longitude: -74.07
            }  
          },
                            { 
            coordinates: {
              latitude: 40.74,
              longitude: -74.08
            }  
          },
                    { 
            coordinates: {
              latitude:40.77,
              longitude: -73.97
            }  
          },
                    { 
            coordinates: {
              latitude: 41.16,
              longitude: -73.76
            }  
          },
                    { 
            coordinates: {
              latitude: 40.74,
              longitude: -73.59
            }  
          },
                    { 
            coordinates: {
              latitude: 43.11,
              longitude: -73.87
            }  
          },
                    { 
            coordinates: {
              latitude: 41.15,
              longitude: -74.03
            }  
          },
                    { 
            coordinates: {
              latitude:40.88,
              longitude: -72.8
            }  
          },
                    { 
            coordinates: {
              latitude: 41.89,
              longitude:-74.26
            }  
          },
                    { 
            coordinates: {
              latitude: 43.04,
              longitude: -73.09
            }  
          },
                    { 
            coordinates: {
              latitude: 39.14,
              longitude: -77.2
            }  
          },
                    { 
            coordinates: {
              latitude: 39.55,
              longitude: -76.31
            }  
          },
                    { 
            coordinates: {
              latitude: 39.55,
              longitude: -76.31
            }  
          },
                    { 
            coordinates: {
              latitude:41.65,
              longitude: -75.3
            }  
          },
                    { 
            coordinates: {
              latitude:39.92,
              longitude: 39.92
            }  
          },
                    { 
            coordinates: {
              latitude:40.21,
              longitude: -75.37
            }  
          },
                    { 
            coordinates: {
              latitude:41.87,
              longitude: -71.58
            }  
          },
                    
                    
        ]
        }

    }
    
    

    _getData = () => {
        fetch('https://api.covid19api.com/dayone/country/united-states/status/confirmed/live')
        .then(response => response.json())
        .then(data => {
            json = data;
            console.log(json[0])

//            console.log("hello");

//            this.setState({ data: data.data[0]['Lat'] })
//            console.log(data.data)
        })   
        .catch(error => console.log('Error'))
    }
    
    render() { 
        //boston is 42.358812, -71.061334  
        return (
        <MapView 
            style = {{flex: 1}} 
            region={{latitude: 42.358812,
                    longitude: -71.061334, 
                    latitudeDelta: 10, 
                    longitudeDelta: 10}} 
            showsUserLocation={true} 
        > 
            
        {this.state.markers.map(marker => (
            <MapView.Marker 
            coordinate={marker.coordinates}
            />
        ))}
        </MapView>
        
        
        );
        
    }
}
//        <MapView.Marker
//            coordinate={{latitude: 42.358812,
//            longitude:-71.061334}}
//         />

//const App: () => React$Node = () => {
//  return (
//    <>
//      <StatusBar barStyle="dark-content" />
//      <SafeAreaView>
//        <ScrollView
//          contentInsetAdjustmentBehavior="automatic"
//          style={styles.scrollView}>
//          <Header />
//          {global.HermesInternal == null ? null : (
//            <View style={styles.engine}>
//              <Text style={styles.footer}>Engine: Hermes</Text>
//            </View>
//          )}
//          <View style={styles.body}>
//            <View style={styles.sectionContainer}>
//              <Text style={styles.sectionTitle}>Step One</Text>
//              <Text style={styles.sectionDescription}>
//                Edit <Text style={styles.highlight}>App.js</Text> to change this
//                screen and then come back to see your edits.
//              </Text>
//            </View>
//            <View style={styles.sectionContainer}>
//              <Text style={styles.sectionTitle}>See Your Changes</Text>
//              <Text style={styles.sectionDescription}>
//                <ReloadInstructions />
//              </Text>
//            </View>
//            <View style={styles.sectionContainer}>
//              <Text style={styles.sectionTitle}>Debug</Text>
//              <Text style={styles.sectionDescription}>
//                <DebugInstructions />
//              </Text>
//            </View>
//            <View style={styles.sectionContainer}>
//              <Text style={styles.sectionTitle}>Learn More</Text>
//              <Text style={styles.sectionDescription}>
//                Read the docs to discover what to do next:
//              </Text>
//            </View>
//            <LearnMoreLinks />
//          </View>
//        </ScrollView>
//      </SafeAreaView>
//    </>
//  );
//};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

//export default App;
