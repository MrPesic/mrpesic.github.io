import React from 'react';
import { Panel, PanelHeader, HeaderButton, Cell, Epic, Tabbar, TabbarItem, Group, Link, List, Div } from "@vkontakte/vkui";
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';
import Icon24Home from '@vkontakte/icons/dist/24/home';
import Icon24Story from '@vkontakte/icons/dist/24/story';
import Icon28More from '@vkontakte/icons/dist/28/more';
let activeColor = "#2975cc";

const other = ({ id, go }) => (
    <Panel id={id}>
        <PanelHeader left={<HeaderButton><Icon24BrowserBack /></HeaderButton>}>Landmarks</PanelHeader>
                <Group title="Источники">
                <List>
                <Cell>
                    <Link href="http://top5-top10.ru/top-10-luchshix-kurortov-rossii/" target="_blank">top5-top10.ru</Link>
                </Cell>
                <Cell>
                    <Link href="https://travelask.ru/articles/porty-rossii" target="_blank">travelask.ru</Link>
                </Cell>
                <Cell>
                    <Link href="https://fb.ru/article/198720/promyishlennyie-goroda-rossii-spisok-samyih-krupnyih-promyishlennyih-tsentrov-stranyi" target="_blank">fb.ru</Link>
                </Cell>
                </List>
                </Group>
        <Epic>
            <Tabbar>
                        <TabbarItem text="Главная" onClick={go} data-to="hello">
                            <Icon24Home />
                        </TabbarItem>
                        <TabbarItem text="Достопримечательности" onClick={go} data-to="dostIndex">
                            <Icon24Story/>
                        </TabbarItem>
                        <TabbarItem text="Другое" onClick={go} data-to="other" style={{color: activeColor}}>
                            <Icon28More width={24} height={24}/>
                        </TabbarItem>
                    </Tabbar>    
                </Epic>  
    </Panel>
);

export default other;