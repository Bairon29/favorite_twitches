export const getMostViewStreams = (data) => {
    var streams = {};
    var most = Number.MIN_VALUE;
    var index = -1;
    //viewer_count
    for(let i = 0; i < data.length; i++){
        if(data[i]['viewer_count'] > most){
            most = data[i]['viewer_count'];
            index = i;
        }
    }
    if(index === -1){
        streams.featured = data[0];
    } else {
        streams.featured = data[index];
    }

    streams.regular = data.filter(d => d.id !== streams.featured.id);

    return streams;
}

export const handleStringLength = (str, len) => {
    var sub_str = "";
    if(len >= str.length || len < 1) {
        return str;
    }

    sub_str = str.substr(0, len);
    sub_str += "...";
    return sub_str;
}