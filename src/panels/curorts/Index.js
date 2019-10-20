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
                Ялта
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
                Сочи 
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
                Феодосия 
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
                Анапа  
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
                Судак 
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
                Алушта 
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
                Геленджик 
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
                Алупка 
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
                Севастополь 
            </Cell>
            <Cell before={<Icon20HomeOutline />} expandable>
                Абхазия
            </Cell>
            <center><Div><Link href="https://vk.me/landmarks" target="_blank">Предложить город</Link></Div></center>
        </List>  
        </Group>
    </Panel>
);

export default port_index;