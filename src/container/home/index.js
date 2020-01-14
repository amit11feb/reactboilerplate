import {
    connect
  } from "react-redux";
  import Home from './home';
  
  
  const mapDispatchToProps = dispatch => {
  
    return {
   
    };
  };
  
  const mapStateToProps = state => {
    return {
      
        isLoading: state.home.isLoading,
  
  
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);