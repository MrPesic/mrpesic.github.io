import React from 'react';
import { Panel, PanelHeader, Group, Cell, Button, Div } from "@vkontakte/vkui";

const home = ({ id, go }) => (
	<Panel id={id}>
		<PanelHeader>Добро пожаловать!</PanelHeader>
			<Group>
				<Cell multiline={true}>
					Добро пожаловать в приложение Landmarks!
				</Cell>
       			<Div><Button size="xl" level="commerce" onClick={go} data-to="hello">Войти</Button></Div>
			</Group>
	</Panel>
);

export default home;