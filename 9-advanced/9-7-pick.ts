{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    }

    type VideoMetaData = Pick<Video, 'id' | 'title'>;

    // 기존에 있는 타입에서 내가 원하는걸 사용해서 제한적으로 사용하고 싶을 때

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