<?php
function get_comm_review($video_ID)
{
$video_url_json = wp_remote_get("https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet,contentDetails&id=" . $video_ID . "&key=AIzaSyDdzIBhHMUrBu4y5aaoo4clJfACIO8aJcY");
$video_url_json_data = json_decode($video_url_json['body'],true);
$videoViewsCount = $video_url_json_data['items'][0]['statistics']['viewCount'];
$videoCommentsCount = $video_url_json_data['items'][0]['statistics']['commentCount'];
$videoTitle = $video_url_json_data['items'][0]['snippet']['title'];
$PublishDate = $video_url_json_data['items'][0]['snippet']['publishedAt'];
$videoDuration = $video_url_json_data['items'][0]['contentDetails']['duration'];
$videoDescription = $video_url_json_data['items'][0]['snippet']['description'];
// $videoLike = $video_url_json_data['items'][0]['statistics']['likeCount'];
// $videoUnlike = $video_url_json_data['items'][0]['statistics']['dislikeCount'];
// $videoAuthorName = $video_url_json_data['items'][0]['snippet']['channelTitle'];
// $videoDate = $video_url_json_data['items'][0]['snippet']['publishedAt'];

// $interval = new DateInterval($videoDuration['duration']);
// $videoDuration['duration_sec'] = $interval->h * 3600 + $interval->i * 60 + $interval->s;

return array('viewCount' => restyle_text($videoViewsCount) , 'commentCount' => restyle_text($videoCommentsCount), 'description' => $videoDescription, 'title' => $videoTitle, 'duration' => $videoDuration,'publishedAt' => $PublishDate);
}
function restyle_text($input){
    $input = number_format($input);
    $input_count = substr_count($input, ',');
    if($input_count != '0'){
        if($input_count == '1'){
            return substr($input, 0, -4).'k';
        } else if($input_count == '2'){
            return substr($input, 0, -8).'M';
        } else if($input_count == '3'){
            return substr($input, 0,  -12).'bil';
        } else {
            return;
        }
    } else {
        return $input;
    }
}

?>