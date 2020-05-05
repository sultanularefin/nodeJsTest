import React, {useEffect, useRef, useState,useCallback} from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
  ActivityIndicator,
  ToastAndroid,
  Alert,
  StatusBar,
  ScrollView,
  TextInput,

  FlatList,

} from 'react-native';


// import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from '@react-native-community/netinfo';
import Snackbar from 'react-native-snackbar';
import ListOfImages from './../monusPages/monozImages/ListOfImages'


// import MTI from 'react-native-vector-icons/MaterialIcons';
import FTI from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'


// import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'


// React Hooks navigation.

// import { useFocusEffect } from '@react-navigation/native';
import {useFocusEffect} from 'react-navigation-hooks';

import QueryCategoriesComponent from './QueryCategoriesComponent';

// const defaultImage = require('./../../assets/default-image_01.jpg');


// React Hooks navigation.
export interface Props {

}



const ItemListTab: React.FC<Props> = ({props,navigation}) => {

  const [searchState, setSearchState] = useState('');
  const [loadingState,setLoadingState]  = useState(false);

  const [connectionStatusState,
    setConnectionStatusState]  = useState(true);

  // const [queryOptionsState,setQueryOptionsState]=useState(DATA);

  const [emptyItemState,setEmptyItemState] = useState(false);

  const deviceWidth = Dimensions.get('window').width;


  const [itemDataState, setItemDataState] = useState([]);

  const [itemDataBackupState,setItemDataBackupState] =useState([]);
  const [errorState, setErrorState]=useState(false);
  const [filterCategory,setFilterCategory] =useState('');


  // const [itemNameTempParameterState,setIitemNameTempParameterState]=useState(null);
  const Separator=()=> {
    return <View style={ItemListTabStyles.separator} />;
  }


  useEffect(() => {

    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      if(!state.isConnected){
        setConnectionStatusState(false);
      }
      else{
        setConnectionStatusState(true);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // function useFriendStatus(friendID) {

  useEffect(() => {
    // const Load_Recent_Survey_data_by_User = async () => {
      const serverDataStateTemp:any[]=[];
      const myUserEmail = auth().currentUser.email;
      console.log('myUserEmail:_____________ ', myUserEmail)
      let surveyDataRef = firestore().collection('items').where('user', '==',
        myUserEmail).orderBy('date', 'desc');
      let query = surveyDataRef.get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log('No matching documents.');
            setEmptyItemState(true);
            return;
          }
          snapshot.forEach(doc => {
            // size= size +1;
            // let oneData =doc.data();
            const oneItemData =doc.data();

            serverDataStateTemp.push({id, ...oneItemData });
            // console.log('doc:-->',doc);
            // serverDataStateTemp.push(myHonda);
          });
          console.log('serverDataStateTemp.length: ',serverDataStateTemp.length);
          setItemDataState(serverDataStateTemp);
          // setLoadingState(false);
        })
        .catch(err => {
          console.log('Error getting documents_______________', err);
          setErrorState(true);
        });

  }, []);


  useFocusEffect(
    useCallback(() => {
      console.log('at LoadData: ','||||||||||||||||||||||||||');

      const serverDataStateTemp2:any[]=[];
      const requestRef =  firestore().collection('items').where('user', '==',
        auth().currentUser.email).orderBy('date', 'desc');

      requestRef.get().then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          setEmptyItemState(true);
          return;
        }

        snapshot.forEach(doc => {
          const id =doc.id;
          console.log('id: ',id);
          const oneItemData =doc.data();

          serverDataStateTemp2.push({id, ...oneItemData });

        });
        console.log('____________________________________',serverDataStateTemp2.length);
        setItemDataState(serverDataStateTemp2);
        // setLoadingState(false);
      })
        .catch(err => {
          console.log('Error getting documents', err);
          // setErrorState(true);
        });


    }, [])
  );






  const handleSelect = async (id:Number,title:string) => {

    console.log('id: ', id);
    console.log('title: ', title);
    // setFilterCategory(title);

    console.log('*****************itemDataState: ***********************\n',itemDataState);

    const allItems = [...itemDataState];
    console.log('***************allItems: *****************\n',allItems);



    if(Number(id) === 1){

      // WILL BE LOADED FROM DB OR FIREBASE LATER

      console.log('----------------------------------------');
      console.log('id is 1');

      const allItems = [...itemDataState];

      // console.log('itemDataState: ',itemDataState);
      //
      // console.log('allItems: ',allItems);

      setItemDataState(allItems);
      // setItemDataState(itemDataBackupState);
    }

    else {
      console.log('_________________________________________ELSE');


      const allItems = [...itemDataState];

      const filteredItems = allItems.filter(oneItem => oneItem.itemData.categoryText.toLocaleLowerCase() === title.toLocaleLowerCase());

      console.log('filteredItems: ', filteredItems);
      // const filteredItems = allItems.find(oneItem => oneItem. !== documentId);
      // deleteItem(documentId);

      // setItemDataBackupState(allItems);
      setItemDataState(filteredItems);

    }

  }






  // [connectionStatusState,itemDataState,serverDataStateTemp]);


  const handleEditUpdate = (documentId) => {

    console.log('documentId: ',documentId)

    return navigation.navigate('EditItemPage',{
      documentId:documentId
    });

    // navigation.navigate('ProductDetailsPage', {
    //   itemId: item.index,
    //   otherParam: item.title,
    //
    // });
  }

  const handleDeleteItem = (documentId) => {



    console.log('at handleDeleteItem [documentId]: ',documentId)

    console.log('itemDataState: ',itemDataState);




    const allItems = [...itemDataState];

    const filteredItems = allItems.filter(oneItem => oneItem.id !== documentId);



    deleteItem(documentId);

    setItemDataState(filteredItems);


  }

  const deleteItem = async (documentId) => {

    console.log('at delete item, documentId: ',documentId);
    // const documentId = navigation.getParam('documentId', 0);
    const myUserEmail = auth().currentUser.email;
    await firestore().collection('items').doc(documentId).delete();


  }





  const handleSearchButton=()=> {

    console.log('connectionStatusState: ',connectionStatusState);
    if(!connectionStatusState){
      Snackbar.show({
        text: 'You are Offline!',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'red',
      });
      return navigation.navigate('LoginSignUP');
    }



    console.log('at handleSearchButton: ');


  }


  const refSearch = useRef(null);
  const AddNew=()=>{
    console.log('at AddNew: ');

    return navigation.navigate('AddItemModalPage');


  }

  const clearSearch=()=>{
    console.log('at clearSearch: ');
    refSearch.current.clear();
    // refPWD.current.focus();

    console.log('searchState: ',searchState);

    setSearchState('');

    // return navigation.navigate('ForgetPassword');

  }

  const setSearch = (e) => {

    console.log('e: at setSearch: ',e);
    setSearchState((e.value || ''));
  };





  if (loadingState) {
    return (
      <View
        style={[ItemListTabStyles.container01_for_login_only]}

        key={'sasas1251231234123rArefin'}>
        <StatusBar backgroundColor='#FFFFFF' barStyle='dark-content'/>
        <ActivityIndicator
          size='large'
          color='#da6a41'
        />


      </View>
    );
  }


  else if ((emptyItemState===true) && (itemDataState ===null)){

    return (
      <View style={ItemListTabStyles.MonosHomePageFullViewWithStatusBar}>
        <StatusBar backgroundColor='#FFFFFF' barStyle='dark-content'/>

        <View style={{
          flex: 9,
          flexDirection:'column',
        }}>

          {/*3*/}
          <View style={{flex:3}}>
            <View style={{flex:0.5}}>
            </View>
            <View style={{flex:1,
              flexDirection:'row',
              justifyContent:'flex-end',
              paddingRight:20,
            }}>

              <TouchableOpacity
                onPress={AddNew}>
                <FTI
                  name='plus-circle'
                  size={40}
                  color='black'

                />
              </TouchableOpacity>
            </View>

            <View style={{
              flex:0.8,

              flexDirection:'row',
              justifyContent:'flex-start',

            }}>
              <View
                // elevation={100}
                style={{
                  backgroundColor:'#c0c0c0',
                  flex:0.8,
                  justifyContent:'space-around',
                  borderRadius:50/4, // height/5
                  marginLeft:10,
                  flexDirection:'row',
                }}
              >



                <View
                  style={{
                    flexDirection:'row',
                    flex:0.8
                  }}
                >
                  <View style={{
                    flexDirection:'column',
                    flex:0.1,
                    justifyContent:'center',
                  }}>
                    <Ionicons style={ItemListTabStyles.searchIcon}
                              name='ios-search'
                              size={20}
                              color='#ffffff'
                    />
                  </View>

                  <TextInput
                    style={[
                      ItemListTabStyles.input,
                      {
                        height: 60,
                      }]}
                    placeholder='Search'
                    ref={refSearch}
                    onChangeText={value => setSearch({value})}
                    autoCorrect={false}
                    textContentType={'none'}
                    // autoCapitalize={'none'}
                    keyboardType={'default'}

                  />
                </View>



                <View style={{flexDirection:'column',
                  flex:0.1,
                  justifyContent:'center'}}>
                  <TouchableOpacity
                    onPress={clearSearch}>
                    {/*<Entypo */}
                    {/*closeIco.*/}
                    {/*x-circle*/}
                    <FTI



                      style={ItemListTabStyles.closeIcon}
                      name='x-circle'
                      size={20}
                      color='#000'
                    />
                  </TouchableOpacity>
                </View>
              </View>



              <TouchableOpacity
                style={{width:deviceWidth,flex:0.3,
                  alignItems: 'stretch',
                  justifyContent:'center',

                }}
              >
                <View style={ItemListTabStyles.MiddleTextViewSearch}>
                  <Text style={ItemListTabStyles.MiddleTextSearch}>Search</Text>
                </View>
              </TouchableOpacity>

            </View>

          </View>
          {/*1*/}

          <View style={{flex:1}}>
          </View>

          <QueryCategoriesComponent

            // currentIndex={22}
            // key={'22'.toString()}
            updateCategoryResult={handleSelect}
            // isActive = {true}


          />


          <View style={{flex:1}}>
          </View>

          <View style={{flex:2}}></View>

        </View>
        <View>

        </View>


        <View  style={ItemListTabStyles.noDataRecentForm} key={'sasas1251231234123r33Arefin'}>
          <Text>No matching documents found, please add from the survey page.</Text>
        </View>
      </View>
    );
  }
  else if (( errorState===true)&&(itemDataState ===null))
  {

    return (
      <View style={ItemListTabStyles.MonosHomePageFullViewWithStatusBar}>
        <StatusBar backgroundColor='#FFFFFF' barStyle='dark-content'>

          <View style={{
            flex: 9,
            flexDirection:'column',
          }}>

            {/*3*/}
            <View style={{flex:3}}>
              <View style={{flex:0.5}}>
              </View>
              <View style={{flex:1,
                flexDirection:'row',
                justifyContent:'flex-end',
                paddingRight:20,
              }}>

                <TouchableOpacity
                  onPress={AddNew}>
                  <FTI
                    name='plus-circle'
                    size={40}
                    color='black'

                  />
                </TouchableOpacity>
              </View>

              <View style={{
                flex:0.8,
                flexDirection:'row',
                justifyContent:'flex-start',

              }}>
                <View
                  // elevation={100}
                  style={{
                    backgroundColor:'#c0c0c0',
                    flex:0.8,
                    justifyContent:'space-around',
                    borderRadius:50/4, // height/5
                    marginLeft:10,
                    flexDirection:'row',
                  }}
                >



                  <View style={{flexDirection:'row',
                    flex:0.8}}>
                    <View style={{
                      flexDirection:'column',
                      flex:0.1,
                      justifyContent:'center',
                    }}>
                      <Ionicons style={ItemListTabStyles.searchIcon}
                                name='ios-search'
                                size={20}
                                color='#ffffff'
                      />
                    </View>

                    <TextInput
                      style={ItemListTabStyles.input}
                      placeholder='Search'
                      ref={refSearch}
                      onChangeText={value => setSearch({value})}
                      autoCorrect={false}
                      textContentType={'none'}
                      // autoCapitalize={'none'}
                      keyboardType={'default'}

                    />
                  </View>



                  <View style={{flexDirection:'column',
                    flex:0.1,
                    justifyContent:'center'}}>
                    <TouchableOpacity
                      onPress={clearSearch}>

                      <Entypo style={ItemListTabStyles.closeIcon}
                              name='circle-with-cross'
                              size={20}
                              color='#000'
                      />
                    </TouchableOpacity>
                  </View>
                </View>



                <TouchableOpacity
                  style={{width:deviceWidth,flex:0.3,
                    alignItems: 'stretch',
                    justifyContent:'center',

                  }}
                >
                  <View style={ItemListTabStyles.MiddleTextViewSearch}>
                    <Text style={ItemListTabStyles.MiddleTextSearch}>Search</Text>
                  </View>
                </TouchableOpacity>

              </View>

            </View>
            {/*1*/}

            <View style={{flex:1}}>
            </View>




            <View style={{flex:1}}>
            </View>

            <View style={{flex:2}}></View>

          </View>
        </StatusBar>
        <View>
        </View>
        <View  style={ItemListTabStyles.noDataRecentForm} key={'sasas1251231234123r33Arefin'}>
          <Text>Error, please check your codes.</Text>
        </View>
      </View>

    );
  }

  else if (itemDataState===null) {
    return (
      <View style={ItemListTabStyles.MonosHomePageFullViewWithStatusBar}>



        {/*3*/}
        <View
          style={{flex:3}}>
          <View style={{flex:0.5}}>
          </View>
          <View style={{flex:1,
            flexDirection:'row',
            justifyContent:'flex-end',
            paddingRight:20,
          }}>

            <TouchableOpacity
              onPress={AddNew}>
              <FTI
                name='plus-circle'
                size={40}
                color='black'

              />
            </TouchableOpacity>
          </View>

          <View style={{
            flex:0.8,
            flexDirection:'row',
            justifyContent:'flex-start',

          }}>
            <View
              // elevation={100}
              style={{
                backgroundColor:'#c0c0c0',
                flex:0.8,
                justifyContent:'space-around',
                borderRadius:50/4, // height/5
                marginLeft:10,
                flexDirection:'row',
              }}
            >



              <View style={{flexDirection:'row',
                flex:0.8}}>
                <View style={{
                  flexDirection:'column',
                  flex:0.1,
                  justifyContent:'center',
                }}>
                  <Ionicons style={ItemListTabStyles.searchIcon}
                            name='ios-search'
                            size={20}
                            color='#ffffff'
                  />
                </View>

                <TextInput
                  style={ItemListTabStyles.input}
                  placeholder='Search'
                  ref={refSearch}
                  onChangeText={value => setSearch({value})}
                  autoCorrect={false}
                  textContentType={'none'}
                  // autoCapitalize={'none'}
                  keyboardType={'default'}

                />
              </View>



              <View style={{flexDirection:'column',
                flex:0.1,
                justifyContent:'center'}}>
                <TouchableOpacity
                  onPress={clearSearch}>

                  <Entypo style={ItemListTabStyles.closeIcon}
                          name='circle-with-cross'
                          size={20}
                          color='#000'
                  />
                </TouchableOpacity>
              </View>
            </View>



            <TouchableOpacity
              style={{width:deviceWidth,flex:0.3,
                alignItems: 'stretch',
                justifyContent:'center',

              }}
            >
              <View style={ItemListTabStyles.MiddleTextViewSearch}>
                <Text style={ItemListTabStyles.MiddleTextSearch}>Search</Text>
              </View>
            </TouchableOpacity>

          </View>

        </View>
        {/*1*/}

        <QueryCategoriesComponent
          // currentIndex={22}
          // key={'22'.toString()}
          updateCategoryResult={handleSelect}
          // isActive = {true}

        />
        
      </View>
    );
  }
  else if(!connectionStatusState){
    return (
      <View style={ItemListTabStyles.MonosHomePageFullViewWithStatusBar}
      >
        <StatusBar backgroundColor='#FFFFFF' barStyle='dark-content'/>
        <View
          style={
            ItemListTabStyles.MonosHomePageFullViewWithOutStatusBar
          }
        >
          <View
            style={{
              flex:2.9,
              flexDirection:'column',
            }}

          >
            <View
              style={{
                flex:0.5,
                flexDirection:'column',
              }}
            >
            </View>
            {/* 0.2 +0.9*/}
            <View
              style={{
                // flex:0.9,
                // flexDirection:'column',
                height:50,
              }}
            >
              <View style={{
                flex:1,
                flexDirection:'row',
                justifyContent:'flex-end',
                paddingRight:20,
              }}
              >

                <TouchableOpacity
                  onPress={AddNew}>
                  <FTI
                    name='plus-circle'
                    size={40}
                    color='black'
                  />
                </TouchableOpacity>
              </View>

            </View>

            <View style={{
              flex:0.1,
              flexDirection:'column',
            }}>
            </View>

            {/* 0.7 + 0.2*/}

            {/* not add image but before flat List*/}
            <View
              style={{
                height:60,
                // flex:1.4,
                // flexDirection:'column',
              }}
            >
              <View style={{
                flex:0.8,
                flexDirection:'row',
                justifyContent:'flex-start',

              }}
              >
                <View
                  // elevation={100}
                  style={{
                    backgroundColor:'#c0c0c0',
                    flex:0.8,
                    justifyContent:'space-around',
                    borderRadius:50/4, // height/5
                    marginLeft:10,
                    flexDirection:'row',
                  }}
                >



                  <View style={{flexDirection:'row',
                    flex:0.8}}>
                    <View style={{
                      flexDirection:'column',
                      flex:0.1,
                      justifyContent:'center',
                    }}>
                      <Ionicons style={ItemListTabStyles.searchIcon}
                                name='ios-search'
                                size={20}
                                color='#ffffff'
                      />
                    </View>

                    <TextInput
                      style={ItemListTabStyles.input}
                      placeholder='Search'
                      ref={refSearch}
                      onChangeText={value => setSearch({value})}
                      autoCorrect={false}
                      textContentType={'none'}
                      // autoCapitalize={'none'}
                      keyboardType={'default'}

                    />
                  </View>

                  <View style={{flexDirection:'column',
                    flex:0.1,
                    justifyContent:'center'}}>
                    <TouchableOpacity
                      onPress={clearSearch}>

                      <Entypo style={ItemListTabStyles.closeIcon}
                              name='circle-with-cross'
                              size={20}
                              color='#000'
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <TouchableOpacity
                  style={{width:deviceWidth,flex:0.3,
                    alignItems: 'stretch',
                    justifyContent:'center',

                  }}
                >
                  <View style={ItemListTabStyles.MiddleTextViewSearch}>
                    <Text style={ItemListTabStyles.MiddleTextSearch}>Search</Text>
                  </View>
                </TouchableOpacity>
              </View>





            </View>

            {/* 1.4*/}

            {/*0.8+ 0.2 = 1*/}


            <QueryCategoriesComponent
              // currentIndex={22}
              // key={'22'.toString()}
              updateCategoryResult={handleSelect}
              // isActive = {true}

            />
          </View>


          {/*flex 3 ends */}


          {/*// flux :8*/}



          <View style={{
            margin:10,
            flex:5.5,
            flexDirection:'column',
          }}
          >

            <Text> You are offline</Text>
          </View>

        </View>

      </View>
    )


  }

  else
  {
    // console.log('size____',size);
    //  console.log('serverDataState____',serverDataState);
    // console.log('arr____',arr);
    // console.log('arr____+__________________________________________________');
    console.log('itemDataState.length_____________-at ELSE METHOD:',itemDataState.length);
    // const filteredItems = allItems.filter(oneItem => oneItem.itemData.categoryText.toLocaleLowerCase() === title.toLocaleLowerCase());
    return (
      <View style={ItemListTabStyles.MonosHomePageFullViewWithStatusBar}>
        <StatusBar backgroundColor='#FFFFFF' barStyle='dark-content'/>
        <View
          style={ItemListTabStyles.MonosHomePageFullViewWithOutStatusBar}
        >
          <View
            style={{
              flex:2.9,
              flexDirection:'column',
            }}

          >
            <View
              style={{
                flex:0.5,
                flexDirection:'column',
              }}
            >
            </View>
            {/* 0.2 +0.9*/}
            <View
              style={{
                // flex:0.9,
                // flexDirection:'column',
                height:50,
              }}
            >
              <View style={{
                flex:1,
                flexDirection:'row',
                justifyContent:'flex-end',
                paddingRight:20,
              }}
              >

                <TouchableOpacity
                  onPress={AddNew}>
                  <FTI
                    name='plus-circle'
                    size={40}
                    color='black'
                  />
                </TouchableOpacity>
              </View>

            </View>

            <View style={{
              flex:0.1,
              flexDirection:'column',
            }}>
            </View>

            {/* 0.7 + 0.2*/}

            {/* not add image but before flat List*/}
            <View
              style={{
                height:60,
                // flex:1.4,
                // flexDirection:'column',
              }}
            >
              <View style={{
                flex:0.8,
                flexDirection:'row',
                justifyContent:'flex-start',

              }}
              >
                <View
                  // elevation={100}
                  style={{
                    backgroundColor:'#c0c0c0',
                    flex:0.8,
                    justifyContent:'space-around',
                    borderRadius:50/4, // height/5
                    marginLeft:10,
                    flexDirection:'row',
                  }}
                >



                  <View style={{flexDirection:'row',
                    flex:0.8}}>
                    <View style={{
                      flexDirection:'column',
                      flex:0.1,
                      justifyContent:'center',
                    }}>
                      <Ionicons style={ItemListTabStyles.searchIcon}
                                name='ios-search'
                                size={20}
                                color='#ffffff'
                      />
                    </View>

                    <TextInput
                      style={ItemListTabStyles.input}
                      placeholder='Search'
                      ref={refSearch}
                      onChangeText={value => setSearch({value})}
                      autoCorrect={false}
                      textContentType={'none'}
                      // autoCapitalize={'none'}
                      keyboardType={'default'}

                    />
                  </View>

                  <View style={{flexDirection:'column',
                    flex:0.1,
                    justifyContent:'center'}}>
                    <TouchableOpacity
                      onPress={clearSearch}>

                      <Entypo style={ItemListTabStyles.closeIcon}
                              name='circle-with-cross'
                              size={20}
                              color='#000'
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <TouchableOpacity
                  style={{width:deviceWidth,flex:0.3,
                    alignItems: 'stretch',
                    justifyContent:'center',

                  }}
                >
                  <View style={ItemListTabStyles.MiddleTextViewSearch}>
                    <Text style={ItemListTabStyles.MiddleTextSearch}>Search</Text>
                  </View>
                </TouchableOpacity>
              </View>





            </View>

            {/* 1.4*/}

            {/*0.8+ 0.2 = 1*/}



            <QueryCategoriesComponent
              // currentIndex={22}
              // key={'22'.toString()}
              updateCategoryResult={handleSelect}
              // isActive = {true}

            />
          </View>


          {/*flex 3 ends */}


          {/*// flux :8*/}



          <View style={{
            margin:10,
            flex:5.5,
            flexDirection:'column',
          }}
          >

            <ScrollView
            >
              <View style={{flex: 2.3,
                flexDirection: 'row',
                width:'100%',
                flexWrap:'wrap',
                // justifyContent:'center',
                alignItems:'flex-end',
                // paddingHorizontal:2,

              }}>
                {
                  itemDataState.map((oneElement, index:number) =>
                    <ListOfImages
                      currentIndex={index}
                      // navigation={props.navigation}

                      key={index.toString()}


                      property={oneElement}
                      newItemSelected={handleEditUpdate}
                      itemToBeDeleted = {handleDeleteItem}
                    />)
                }
              </View>
            </ScrollView>
          </View>
        </View>

      </View>

    );
  }

}







const ItemListTabStyles = StyleSheet.create({
  MonosHomePageFullViewWithStatusBar: {
    flex: 10,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignContent: 'center',
    backgroundColor:'#ffffff',
  },
  MonosHomePageFullViewWithOutStatusBar: {
    flex: 10,
    flexDirection: 'column',
  },


  TextViewStyle:{
    flexDirection:'column',
    marginLeft:20,
    flex:1,
  },
  textInputStyle:{
    color:'#aac',
  },

  pageBottomView:{
    flex: 0.5,
    flexDirection: 'row',
    width:'100%',
    flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'flex-end',
  },
  container01_for_login_only: {
    flex: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },

  noDataRecentForm:{
    flex: 1,
    textAlign: 'center',
    flexDirection:'column',
    textAlignVertical: 'center',
    justifyContent:'center',
    paddingHorizontal:20,
  },
  buttonBillsList:{
    backgroundColor: 'white',
    alignItems:'center',
    borderRadius: 5,
    borderColor:'#fa5656',
    borderWidth:0.5,
  },
  separator: {
    marginVertical: 8,
    borderTopColor: '#737373',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    color: '#C4C805',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    fontSize:20,
  },

  MiddleTextSearch:{
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    fontSize:20,
    textAlign:'center',
  },
  MiddleText: {
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    fontSize:20,
    textAlign:'center',

  },

  MiddleTextViewSearch:{
    flex: 1,
    justifyContent: 'center',
  },
  MiddleTextView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },


  KeyboardHideViewTest: {
    flex: 4,
    flexDirection: 'column',
  },
  InputContainer:{
    flex: 1.5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    marginLeft: 10,
  },


  ForgetPasswordView:{
    flex: 2,

  },
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {

    paddingRight: 5,
  },
  closeIcon: {

    paddingRight: 5,
  },
  input: {
    flex: 0.6,
    // backgroundColor:'#c0c0c0',
    backgroundColor:'#c0c0c0',
    // silver (#c0c0c0)
    paddingLeft: 0,
    color: '#ffffff',
    fontWeight:'normal',
    fontSize:16,
  },
});


export default ItemListTab;
