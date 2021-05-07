import React, { Component } from 'react';
import {
	HeaderWrapper, 
	Logo, 
	Nav, 
	NavItem, 
	NavSearch, 
	Addition, 
	Button, 
	SearchWrapper,
	SearchInfo, 
	SearchInfoTitle, 
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList
} from './style';
import '../../statics/iconfont/iconfont.css';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators }  from './store';


class Header extends Component {
	
	render() {
		const { focused, handleInputFocus, handleInputBlur } = this.props;
		const nodeRef = React.createRef(null);

		return (
			<HeaderWrapper>
				<Logo />
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载APP</NavItem>
					<NavItem className="right">登录</NavItem>
					<NavItem className="right">
						<span className="iconfont">&#xe636;</span>
					</NavItem>

					<SearchWrapper>
						<CSSTransition timeout={200} in={focused} nodeRef={nodeRef}>
							<NavSearch
								className={focused ? 'focused' : ''}
								onFocus={handleInputFocus}
								onBlur={handleInputBlur}
							/>
						</CSSTransition>
						<span className={focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</span>
						{/* 热门搜索 */}
						{ this.getListArea() }
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className="writing">
						<span className="iconfont">&#xe624;</span>
						写文章
					</Button>
					<Button className="reg">注册</Button>
				</Addition>
			</HeaderWrapper>
		);
	}

	getListArea() {
		if(this.props.focused) {
			return (
				<SearchInfo>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch>换一批</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
					{
						this.props.list.map((item, index) => {
							return <SearchInfoItem key={index}>{item}</SearchInfoItem>
						})
					}
					</SearchInfoList>
				</SearchInfo>
			)
		}else{
			return null
		}
	}
}


const mapStateToProps = state => {
	return {
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list'])
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleInputFocus() {
			// Ajax 请求搜索数据
			dispatch(actionCreators.getList())
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
