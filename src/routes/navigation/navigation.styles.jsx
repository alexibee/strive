import styled from 'styled-components';
import { ReactComponent as LogoSvg } from '../../assets/strive_logo.svg';
import { Link } from 'react-router-dom';

export const BodyWrapper = styled.div`
	min-height: 91vh;
`;
export const OverflowHidden = styled.div`
	overflow: hidden;
`;
export const NavigationContainer = styled.div`
	height: 90px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
	padding: 20px 40px 0 40px;
`;

export const StriveLogo = styled(LogoSvg)`
	height: 100%;
	width: 70px;
`;
export const NavLinksContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;
export const NavLinkStyled = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
	&:hover {
		color: grey;
	}
`;
