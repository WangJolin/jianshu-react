import styled from 'styled-components';

export const HomeWrapper = styled.div`
	width: 960px;
	margin: 0 auto;
	overflow: hidden;
	padding-top: 30px;
`;

export const HomeLeft = styled.div`
	width: 65%;
	float: left;
	margin-left: 12px;
`;

export const HomeRight = styled.div`
	width: 30%;
	float: right;
`;

export const TopticWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	// margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;

export const ListItem = styled.div`
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	overflow: hidden;
	.pic {
		display: block;
		width: 150px;
		height: 100px;
		float: right;
		border-radius: 4px;
	}
`;

export const ListInfo = styled.div`
	width: 474px;
	float: left;
	.title {
		font-size: 18px;
		line-height: 1.5;
		font-weight: 700;
		color: #333;
		margin: -7px 0 4px;
	}
	.desc {
		font-size: 13px;
		line-height: 24px;
		color: #999;
	}
`;

export const RecommendWrapper = styled.div`
	// margin: 30px 0;
	width: 280px;
	padding-bottom: 10px;
`;

export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${props => props.imgUrl});
	background-size: contain;
`;

export const WritterWrapper = styled.div`
	width: 280px;
	border: 1px solid #dcdcdc;
	.title {
		text-align: left;
		font-size: 14px;
		color: #969696;
	}
`;

export const WritterItem = styled.li`
	margin: 0 0 20px;
	text-align: left;
	list-style: none;
	margin-top: 15px;
	line-height: 20px;
	box-sizing: border-box;
	.avatar {
		display: block;
		float: left;
		width: 50px;
		height: 50px;
		margin-right: 10px;
		background-color: transparent;
		border-radius: 50%;
		img {
			background: url(${props => props.imgUrl});
		}
	}
`;
