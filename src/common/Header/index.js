import React from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style';
import '../../statics/iconfont/iconfont.css';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators }  from './store';

// HeaderUI 组件
function Header(props) {
	const { focused, handleInputFocus, handleInputBlur } = props;
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

const mapStateToProps = state => {
	return {
		focused: state.header.get('focused'),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleInputFocus() {
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
