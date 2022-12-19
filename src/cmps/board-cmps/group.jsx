import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';


export const Group = ({ group }) => {

    console.log('received group', group);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 130 },
      ];

    return (
        <div className="group">
            <h3 className="group-title">{group.title}</h3>
            <div style={{ height: 300, width: '100%' }}>
                <DataGrid
                    className='table-grid'
                    checkboxSelection
                    rows={group.tasks}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>
        </div>
    )
}
