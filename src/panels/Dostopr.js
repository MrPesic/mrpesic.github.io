import React from 'react';
import { Panel, PanelHeader, Group, Cell, Div, Epic, Tabbar, TabbarItem, HeaderButton, List, HeaderSearch } from "@vkontakte/vkui";
import Icon24Home from '@vkontakte/icons/dist/24/home';
import Icon24Story from '@vkontakte/icons/dist/24/story';
import Icon28More from '@vkontakte/icons/dist/28/more';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';
import Icon20HomeOutline from '@vkontakte/icons/dist/20/home_outline';
import Icon24Work from '@vkontakte/icons/dist/24/work';
import Icon24Place from '@vkontakte/icons/dist/24/place';
import Icon24Gallery from '@vkontakte/icons/dist/24/gallery';

let activeColor = "#2975cc";

const dostopr = ({ id, go }) => (
    <Panel id={id}>
        <PanelHeader left={<HeaderButton onClick={go} data-to="hello"><Icon24BrowserBack/></HeaderButton>}>Landmarks</PanelHeader>
        <Group title="Выберите тип города">
            <List>
                <Cell before={<Icon24Work />} expandable onClick={go} data-to="prom" description="Челябинск, Новокузнецк">
                    Промышленные города
                </Cell>
                <Cell before={<Icon24Place />} expandable onClick={go} data-to="port" description="Санкт-Петербург, Владивосток">
                    Портовые города
                </Cell>
                <Cell before={<Icon24Gallery />} expandable onClick={go} data-to="kur" description="Геленджик, Анапа">
                    Курортные города
                </Cell>
            </List>
                <Epic>
                    <Tabbar>
                        <TabbarItem text="Главная" onClick={go} data-to="hello">
                            <Icon24Home />
                        </TabbarItem>
                        <TabbarItem text="Достопримечательности" style={{color: activeColor}}>
                            <Icon24Story/>
                        </TabbarItem>
                        <TabbarItem onClick={go} data-to="other" text="Другое">
                            <Icon28More width={24} height={24}/>
                        </TabbarItem>
                    </Tabbar>    
                </Epic>                
        </Group>
    </Panel>
);

export default dostopr;