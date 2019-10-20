import React from 'react';
import { Panel, PanelHeader, Group, Cell, Div, Epic, Tabbar, TabbarItem } from "@vkontakte/vkui";
import Icon24Home from '@vkontakte/icons/dist/24/home';
import Icon24Story from '@vkontakte/icons/dist/24/story';
import Icon28More from '@vkontakte/icons/dist/28/more';

let activeColor = "#2975cc";

const hello = ({ id, go }) => (
    <Panel id={id}>
        <PanelHeader>Landmarks</PanelHeader>
        <Group>
            <center>
                <Div><img src="http://freeimagedownload.biz/i/Q3E4JaFxaZ.png"></img></Div>
                <Epic>
                    <Tabbar>
                        <TabbarItem text="Главная" onClick={go} data-to="hello" style={{color: activeColor}}>
                            <Icon24Home />
                        </TabbarItem>
                        <TabbarItem text="Достопримечательности" onClick={go} data-to="dostIndex">
                            <Icon24Story/>
                        </TabbarItem>
                        <TabbarItem onClick={go} data-to="other" text="Другое">
                            <Icon28More width={24} height={24}/>
                        </TabbarItem>
                    </Tabbar>    
                </Epic>                
            </center>
        </Group>
    </Panel>
);

export default hello;