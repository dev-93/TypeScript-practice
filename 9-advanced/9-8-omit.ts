{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    }

    type VideoMetaData = Pick<Video, 'id' | 'title' | 'date'>; //error, Video type에 date 라는 key가 없기 때문에
    
    type VideoOmitData = Omit<Video, 'id' | 'title' | 'h'>;

    function getVideo(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'https://..',
            data: 'byte-data',
        }
    }

    function getVideoMetaData(id: string): VideoMetaData {
        return {
            id,
            title: 'title',
        }
    }
}