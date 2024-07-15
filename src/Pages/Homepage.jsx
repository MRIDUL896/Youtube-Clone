import React, { useEffect } from 'react';
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { useAppDispatch, useAppSelector } from "../hooks/useApp"
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';
import Spinner from '../Components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../Components/Card';

const Homepage = () => {
    let x = 1;

    const dispatch = useAppDispatch();
    const videos = useAppSelector((state) => state.youtubeApp.videos);

    useEffect(() => {
        dispatch(getHomePageVideos(false))
        console.log(videos);
    }, [dispatch])

    return (
        <div className='max-h-screen '>
            <div style={{ height: "7.5vh" }}>
                <Navbar/>
            </div>
            <div className='flex bg-black' style={{ height: "92.5vh" }}>
                <Sidebar />
                {
                    videos.length ? (
                        <InfiniteScroll
                            dataLength={videos.length}
                            next={() => dispatch(getHomePageVideos(true))}
                            hasMore={videos.length < 500}
                            loader={<Spinner />}
                            height={650}
                        >
                            <div className='flex flex-wrap'>
                                {videos.map((item) => {
                                    return <div className='m-2'><Card data={item} key={item.videoId + x} /> </div>
                                })}
                            </div>
                        </InfiniteScroll>
                    ) : (
                        <Spinner />
                    )
                }
            </div>
        </div>
    );
}

export default Homepage;
