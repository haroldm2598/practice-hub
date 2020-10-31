import React from 'react';
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH1,
    ServicesH2,
    ServicesP
} from './Services.elements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce Expense</ServicesH2>
                    <ServicesP>We Heko reduce your fease and increase your net income</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Reduce Expense</ServicesH2>
                    <ServicesP>We Heko reduce your fease and increase your net income</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Reduce Expense</ServicesH2>
                    <ServicesP>We Heko reduce your fease and increase your net income</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;
