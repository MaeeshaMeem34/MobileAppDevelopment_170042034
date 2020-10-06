import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import homeScreen from './src/screens/HomeScreen';
import FacultyList from './src/screens/FacultyListScreen';
import SemesterPage from './src/screens/SemesterScreen';
import firstSemCourse from './src/screens/FirstSemesterCourse';
import secondSemCourse from './src/screens/SecondSemesterCourse';
import thirdSemCourse from './src/screens/ThirdSemesterCourse';
import profile from './src/screens/ProfileScreen';




const stack = createStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={homeScreen} />
        <stack.Screen name="FacultyList" component={FacultyList} />
        <stack.Screen name="Semesters" component={SemesterPage} />
        <stack.Screen name="Course1" component={firstSemCourse} />
        <stack.Screen name="Course2" component={secondSemCourse} />
        <stack.Screen name="Course3" component={thirdSemCourse} />
        <stack.Screen name="Profile" component={profile} />



        

      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;