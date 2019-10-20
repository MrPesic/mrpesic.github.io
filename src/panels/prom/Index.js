import React from 'react';
import { Panel, PanelHeader, HeaderButton, Group, Cell, List, Link, Div } from '@vkontakte/vkui';
import Icon20HomeOutline from '@vkontakte/icons/dist/20/home_outline';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';

const prom_index = ({ id, go }) => (
    <Panel id={id}>
        <PanelHeader left={<HeaderButton onClick={go} data-to="dostIndex"><Icon24BrowserBack /></HeaderButton>}>Промышленные города</PanelHeader>
        <Group title="Выберите город">      
        <List>   
            <Cell before={<Icon20HomeOutline />} expandable>
                Москва
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
                Санкт-Петербург
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
                Сургут
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
               Нижневартовск
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
               Омск
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
               Пермь
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
               Уфа
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
               Норильск
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
               Челябинск
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
               Новокузнецк
            </Cell>
            <center><Div><Link href="https://vk.me/landmarks" target="_blank">Предложить город</Link></Div></center>
        </List>  
        </Group>
    </Panel>
);

export default prom_index;