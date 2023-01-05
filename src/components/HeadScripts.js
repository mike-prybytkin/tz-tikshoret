import { useEffect } from 'react';

function HeadScripts() {

    useEffect(() => {
        // setcookie
        const url = new URL(window.location.href);
        let fb = url.searchParams.get('fb');
        document.cookie = "fb="+fb;

        // FB Pixel
        let date = new Date();
        date.setTime(date.getTime() + (5 * 24 * 60 * 60 * 1000));
        if (!'{pixel_id}'.match('{')) {
            document.cookie = "fb={pixel_id}; " + "expires=" + date.toUTCString() + "";
        }
    });

    return (console.log('Scripts in head loaded...'));
}

export default HeadScripts