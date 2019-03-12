// var re = /%{width}x%{height}/i;
// var str = "https://static-cdn.jtvnw.net/s3_vods/tumakninah400/319839127/596a71b8-1cd2-433c-beb4-e879f7ddefb6/thumb/index-0000000000-%{width}x%{height}.jpg"
// var found = str.match(re);
// str.replace(re, "1920x1080")
// re.test(str)

export const setImageResolution = (str, resolution) => {
    if(resolution.test(str)){
        str = str.replace(resolution, "1920x1080");
    }
    return str;
}