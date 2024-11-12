'use client'

import { Card, CardContent } from '@/components/ui/card'
import { useContext } from 'react'
import { ThemeContext } from '../components/Provider'
import TitlePage from '../components/TitlePage'
import { TableDemo } from '../components/TableDemo'
import Map from '../components/Map' 
import { StatisticsSection } from '../components/StatisticsSection' // Import the new statistics section

function DashboardPage() {
    const theme = useContext(ThemeContext);

    return (
        <>        
            {/* Map Section */}
            <Card className='mb-10 border-dashed'>
                <CardContent>
                    <Map />
                </CardContent>
            </Card>

            <div className="mb-10">
                <TableDemo />
            </div>

            {/* Statistics Section */}
            <StatisticsSection />
        </>
    )
}

export default DashboardPage;
