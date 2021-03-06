import styled from 'styled-components';
import Lottie from 'react-lottie-light-js';
import { device } from '../styles/theme';
import { Spaceship } from '../public/assets';

const Section6 = () => {
    const optionsSpaceship = {
        animationData: Spaceship,
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
            progressiveLoad: true,
        },
    };

    return (
        <Box>
            <Content>
                <div className="__info__list">
                    <div className="__info sa sa-up">
                        <strong>76</strong>
                        <span>Enrolled Projects</span>
                    </div>
                    <div className="__info sa sa-up" data-sa-delay="200">
                        <strong>28</strong>
                        <span>Contributors</span>
                    </div>
                </div>
                <div className="__mission">
                    SpaceONE’s Mission is to Accelerate the Multi-Cloud Native Technology
                    for Sustainable Ecosystem.
                </div>
                <div>
                    <figure className="__spaceship sa sa-up"><Lottie options={optionsSpaceship} /></figure>
                    <div className="__gradient sa sa-up" data-sa-delay="100">Climb Aboard <span>the <em>SpaceONE</em>ship</span></div>
                </div>
            </Content>
        </Box>
    );
};

const Box = styled.section`
  width: 100%;
  height: 96rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media ${device.mobile} {
    height: 81.2rem;
    padding: 0 3rem;
    box-sizing: border-box;
  }
`;

const Content = styled.div`
  width: 70rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: -0.02em;

  .__info__list {
    padding-bottom: 5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: .1rem solid ${({ theme }) => theme.color.primary[300]};
    font-size: 2.2rem;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.color.gray[300]};


    .__info {
      width: 50%;

      strong {
        display: inline-block;
        margin-right: 1rem;
        font-family: Helvetica Neue;
        font-size: 6rem;
        line-height: 1.1;
        font-weight: 400;
        color: ${({ theme }) => theme.color.primary[300]};
      }
    }
  }

  .__mission {
    font-weight: 400;
    margin-top: 5rem;
    color: ${({ theme }) => theme.color.primary[200]};
    font-size: 3.7rem;
    line-height: 130%;
    opacity: 0.8;
    letter-spacing: -0.01em;
    text-align: center;
  }

  .__spaceship {
    width: 14rem;
    height: 14rem;
    margin: 7.1rem auto 0;
  }

  .__gradient {
    margin-top: -2rem;
    font-weight: 500;
    font-size: 3.4rem;
    background: linear-gradient(to right, #65cba0, #cf88a0, #5ca2b1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    em {
      font-weight: 600;
    }
  }

  @media ${device.tablet} {
    width: 60rem;

    .__mission {
      width: 46.5rem;
      font-size: 2.6rem;
    }

    .__spaceship {
      width: 12rem;
      height: 12rem;
    }
    
    .__gradient {
      font-size: 2.4rem;
    }
  }

  @media ${device.mobile} {
    width: 100%;

    .__info__list {
      width: calc(100% - 3rem);
      padding-bottom: 3rem;
      font-size: 1.7rem;
      box-sizing: border-box;

      .__info {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
        width: 100%;
        padding: 0 3rem;
        margin-bottom: 2rem;
        box-sizing: border-box;

        strong {
          font-size: 4.4rem;
        }
      }
    }

    .__mission {
      font-size: 2.2rem;
      line-height: 1.3;
    }

    .__spaceship {
      width: 10.3rem;
      height: 10.3rem;
      margin-top: 3rem;
    }

    .__gradient {
      width: 25.5rem;
      margin-top: -.5rem;
      font-size: 2.4rem;
      line-height: 1.1;
      text-align: center;

      span {
        display: block;
      }
    }
  }
`;

export default Section6;
