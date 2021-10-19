import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useNews from '../../hooks/useNews';

const NewsDetail = () => {
    const [news] = useNews();
    const { newsId } = useParams();
    const [singleNews, setSingleNews] = useState({});
    useEffect(() => {
        const filteredNews = news.filter(newsItem => newsItem?.id === newsId);
        setSingleNews(filteredNews[0])
    }, [news, newsId]);
    console.log('from news', singleNews);
    return (
        <div className="">
            <Container className="py-4">
                <Row className="p-3 service-detail">
                    <Col className="d-flex align-items-center" xs={2} md={4}>
                        <img className="img-fluid" src={singleNews?.img} alt="" />
                    </Col>
                    <Col xs={10} md={8}>
                        <h3>Name: {singleNews?.title}</h3>
                        <p><b>Description :</b> {singleNews?.description}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsDetail;