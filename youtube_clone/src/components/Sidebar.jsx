import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const Sidebar = ({selectedCategory, setSelectedCategory}) => (
    <Stack direction="row" sx={{ 
        overflowY: 'auto',
        height: { sx: 'auto', md: 'auto' },
        flexDirection: { md: 'column' }
    }}>
        {categories.map((category)=>(
            <button className='category-btn'
            onClick={()=>setSelectedCategory(category.name)}
            style={{
                background: category.name === selectedCategory && '#bbb7e1', 
                color: 'white'
            }}
            key={category.name}
            >
                <span style={{color: category.name === selectedCategory ? 'white' : '#bbb7e1', marginRight: '15px'}}>{category.icon}</span>
                <span style={{opacity: category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
            </button>
            ))}
    </Stack>
  );

export default Sidebar;