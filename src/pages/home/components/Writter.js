import React, { Component } from 'react';
import { WritterWrapper, WritterItem } from '../style';
import { connect } from 'react-redux';
class Writter extends Component {
	render() {
		// const { list } = this.props;
		return (
			<WritterWrapper>
				<div className="title">
					<span>推荐作者</span>
				</div>
				<WritterItem imgUrl="/img/writer1.webp">
					<a
						className="avatar"
						href="https://www.jianshu.com/u/addcee2f9c78?utm_source=desktop&utm_medium=index-users"
					>
						<img alt="" />
					</a>
				</WritterItem>
			</WritterWrapper>
		);
	}
}
const mapState = state => ({
	list: state.getIn(['home', 'writterList']),
});
export default connect(mapState, null)(Writter);
