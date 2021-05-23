import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
// import Toptic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import WritterWrapper from './components/Writter';
class Home extends Component {
	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					{/* <Toptic></Toptic> */}
					<List></List>
				</HomeLeft>
				<HomeRight>
					<Recommend></Recommend>
					<WritterWrapper></WritterWrapper>
				</HomeRight>
			</HomeWrapper>
		);
	}
}

export default Home;
