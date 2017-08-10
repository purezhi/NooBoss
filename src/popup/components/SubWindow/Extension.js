import React, { Component } from 'react';
import styled from 'styled-components';
import { Sunny } from '../../../icons';

const ExtensionDiv = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`;

class Extension extends Component{
	constructor(props) {
		super(props);
	}
	render() {
		if (!shared || !shared.extensions || !shared.extensions[this.props.id]) {
			return <ExtensionDiv><Sunny id="loader" color={shared.themeMainColor} /></ExtensionDiv>;
		}
		const extension = shared.extensions[this.props.id];
		return (
			<ExtensionDiv>
				<section>
					<h1>{extension.name}</h1>
				</section>
			</ExtensionDiv>
		);
	}
}

export default Extension;
