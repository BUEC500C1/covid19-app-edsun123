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
//        this.state = { data: [] };
        this.state = {
          markers: [[
              {"Cases": 1, "City": "", "CityCode": "", "Country": "United States of America", "CountryCode": "US", "Date": "2020-01-22T00:00:00Z", "Lat": "37.09", "Lon": "-95.71", "Province": "", "Status": "confirmed"}

          ]]
        }
                    


    }
    
      componentDidMount() {
        fetch(`https://api.covid19api.com/dayone/country/united-states/status/confirmed/live`)
          .then(res => res.json())
          .then(json => {
            var dict = []
            for (i = 0; i < 1000; i++) {
                dict.push(json[i])
            } 
            
            this.setState({ markers: [dict]
         });     
        } );
      }
    render() { 
        return (    
        <MapView 
            style = {{flex: 1}} 
            region={{latitude: 37.09,
                    longitude: -95.71, 
                    latitudeDelta: 50, 
                    longitudeDelta: 1}} 
            showsUserLocation={true} 
        > 
            
    
        {
           this.state.markers[0].map(marker => (
            <MapView.Marker 
            coordinate={{latitude: marker.Lat, 
                    longitude: marker.Lon}}
            description={String(marker.Cases)+" Cases sinces " + String(marker.Date) + " in " + String(marker.City) + ", " + String(marker.Province)}
            >
        
            </MapView.Marker>
        ))
        }
        </MapView>
        );
        
    }
    
}

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


// getData(){
//        var dict = [];
//        return fetch('https://api.covid19api.com/dayone/country/united-states/status/confirmed/live')
//        .then(response => response.json())
//        .then(data => {
//            json = data;
//            myObj = [{"name":"John", "age":30, "car":null},
//                    {"name":"mark", "age":31, "car":null}];
////            console.log(json[0]["Lat"]);
//            
//            for (entry in myObj ){
////                console.log(myObj[entry]["name"]);
//                var name = myObj[entry]["name"];
//                var age = myObj[entry]["age"]
//                dict.push({
//                    key: name,
//                    age: age
//                });
//            }
////            console.log(dict[0])
//            console.log("-----")
//
//            return dict[1]
//
//        })   
//        .catch(error => console.log('Error'));
////        console.log("-----")
//
////        console.log(dict[0])
//
////        return 1;
//
//    }
//export default App;
