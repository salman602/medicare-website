import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useNews from '../../../hooks/useNews';
import NewsItem from '../NewsItem/NewsItem';

const News = () => {
    const [news] = useNews();
    console.log(news);
    return (
        <div id="news" className="py-4 services-section">
            <Container>
                <h3 className="text-center">Latest News</h3>
                <Row xs={1} md={2} className="gx-5 gy-4 mt-2">
                    {
                        news.map(item => <NewsItem
                            key={item?.id}
                            item={item}
                        ></NewsItem>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default News;