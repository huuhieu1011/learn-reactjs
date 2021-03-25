import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Top 100 Bài Hát Nhạc Trẻ Hay Nhất',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/9/e/9/09e9516331db094f2e8270af1b0748c2.jpg'
        },
        {
            id: 2,
            name: 'Top 100 Nhạc Trữ Tình Hay Nhất',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/1/0/f/610f6b9b6d694034c23e4ef48e4ad7b8.jpg'
        },
        {
            id: 3,
            name: 'Top 100 Pop Âu Mỹ Hay Nhất',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/d/b/c/b/dbcb684ed2319a6333917085312999c9.jpg'
        },
    ];
    return (
        <div>
            <h2>Co the ban thich day</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;