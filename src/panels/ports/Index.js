import React from 'react';
import { Panel, PanelHeader, HeaderButton, Group, Cell, List, Link, Div } from '@vkontakte/vkui';
import Icon20HomeOutline from '@vkontakte/icons/dist/20/home_outline';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';

const port_index = ({ id, go }) => (
    <Panel id={id}>
        <PanelHeader left={<HeaderButton onClick={go} data-to="dostIndex"><Icon24BrowserBack /></HeaderButton>}>Промышленные города</PanelHeader>
        <Group title="Выберите город">      
        <List>   
            <Cell before={<Icon20HomeOutline />} expandable>
                Новороссийск
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
                Приморск
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
                Санкт-Петербург
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
               Находка
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
               Мурманск
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
               Ванино
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
               Туапсе
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
               Владивосток
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
               Калининград
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
               Ростов-на-Дону
            </Cell>
            <center><Div><Link href="https://vk.me/landmarks" target="_blank">Предложить город</Link></Div></center>
        </List>  
        </Group>
    </Panel>
);

export default port_index;