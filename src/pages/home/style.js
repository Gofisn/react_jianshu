import styled from 'styled-components';

export const HomeWrapper = styled.div`
width:960px;
margin:0 auto;
overflow:hidden;
`
export const HomeLeft = styled.div`
float:left;
margin-left:15px;
padding-top:30px;
width:625px;
.banner-img{
    width:600px;
    height:270px;
}
`
export const HomeRight = styled.div`
width:240px;
float:right;
`
export const TopicWripper = styled.div`
padding:20px 0 10px 0;
overflow:hidden;
margin-left:-18px;
`
export const TopicItem = styled.div`
float:left;
background:#f7f7f7;
color:#000;
border:1px solid #dcdcdc;
font-size:14px;
height:32px;
line-height:32px;
border-radius:4px;
padding-right:10px;
margin-left:10px;
margin-bottom:10px;
.topic-pic{
    width:32px;
    height:32px;
    display:block;
    float:left;

}
`
export const ListItem = styled.div`
padding:20px 0;
border-bottom:1px solid #ddd;
overflow:hidden;
color: #000;
.pic{
    display:block;
    width:125px;
    height:100px;
    float:right;
}
`
export const ListInfo = styled.div`
width:500px;
float:left;
.title{
    font-size:18px;
    line-height:27px;
    font-weight:bold;
}
.desc{
    font-size:13px;
    line-height:20px;
}
`
export const RecommendWrapper = styled.div`
margin:30px 0;
width:280px;
`
export const RecommendItem = styled.div`
width:280px;
height:50px;
background:url(${(props)=>props.imgUrl});
background-size:contain;
`
export const WriterWrapper = styled.div`
width:278px;
border:1px solid #ddd;
border-radius:3px;
height:300px;
line-height:300px;
text-align:center;
`
export const LoadMore = styled.div`
width:100%;
height:40px;
line-height:40px;
background:#a5a5a5;
text-align:center;
border-radius:20px;
color: #fff;
`
export const BackTop = styled.div`
position:fixed;
right:30px;
bottom: 30px;
width:60px;
height:60px;
line-height:60px;
text-align:center;
border:1px solid #ccc;
font-size:20px;
font-weight:bold;

`