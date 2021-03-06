import React from 'react';
import { connect } from 'react-redux';
import { compose } from "recompose"
import { bindActionCreators } from 'redux'
import TweetsList from './tweetsIndex/TweetsList'
import NavBar from './appBar/NavBar'
import { fetchTweets } from '../../actions/fetchTweets'
import { resetQuery } from '../../actions/resetQuery'
import { fetchTrends } from '../../actions/fetchTrends';
import TrendsList from './trendsIndex/TrendsList'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class ShowPage extends React.Component {

  constructor(props){
    super(props);
    this.handleTrendClick = this.handleTrendClick.bind(this)
  }

  handleTrendClick(query){
    let searchQuery = query
    let topic = this.props.trends.find(topic => topic.name === query)
    if (topic){
      searchQuery = topic.query
    }
    this.props.fetchTweets(searchQuery)
  }

  componentDidMount(){
    console.log("PLACES ARE ", this.props.places)
    debugger;

// NEED TO WAIT TILL APP.JS FETCHES AND UPDATES PLACES IN STATE
//HOW?!

    // if (this.props.isDirectlyAccessing)){
    //
    // PROBLEM: this.props.places is EMPTY (view above)
    //   const place = this.props.places.find(place => place.woeid === this.props.woeid)
    //   let data
    //   if (place){
    //      data = {
    //       type: 'woeid',
    //       woeid: place.woeid,
    //       name: place.name
    //     }
    //   } else {
    //     data = {type: 'error'};
    //   }
    //   debugger;
    //   if (data.type === 'woeid'){
    //     debugger;
    //     fetchTrends(data)
    //   } else {
    //     debugger;
    //      alert('THE PLACE DOES NOT HAVE A TREND');
    //   }
    // }



  }


  render(){
    debugger;
    return (
      <div>
        <NavBar resetQuery={this.props.resetQuery}/>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <TrendsList
              trends={this.props.trends}
              placeQuery={this.props.placeQuery}
              handleTrendClick={this.handleTrendClick}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={9} xl={9}>
            <TweetsList tweets={this.props.tweets} isFetching={this.props.isFetchingTweets}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  const isDirectlyAccessing = state.placeQuery.query.woeid != ownProps.match.params.woeid
  debugger;

  // WHY IS STATE.PLACES EMPTY WHEN DIRECTLY ACCESSING THIS ROUTE?
  return {
    places: state.places,
    trends: state.placeQuery.trends,
    placeQuery: state.placeQuery.query,

    tweets: state.trendQuery.tweets,
    isFetchingTweets: state.trendQuery.isFetching,

// FOR IMPLEMENTING WHEN A USER DIRECTLY ACCESS /trends/:woeid
    isDirectlyAccessing: isDirectlyAccessing

  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchTweets: fetchTweets,
    resetQuery: resetQuery,
    fetchTrends: fetchTrends,
  }, dispatch)
}


export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(ShowPage);
