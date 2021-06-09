import { Switch, Redirect, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import VideoList from './screens/VideoList';
import VideoPlay from './screens/VideoPlay';

const Routes = () => (
    <AnimatedSwitch
        atEnter={{ offset: -100 }}
        atLeave={{ offset: -100 }}
        atActive={{ offset: 0 }}
        mapStyles={(styles) => ({
            transform: `translate(${styles.offset}%)`,
        })}>
        <Route
            path='/video-list'
            render={params => <VideoList {...params} />}
        />
        <Route
            path='/video-play/:id'
            render={params => <VideoPlay {...params} />}
        />
        <Redirect to='/video-list' />
    </AnimatedSwitch>
);

export default Routes;
