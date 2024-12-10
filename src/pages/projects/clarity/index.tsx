import BackNavigation from '../../../components/layout/BackNavigation'
import { BackNavigationProps } from '../../../types/layout'
import { useDocumentTitle } from '../../../hooks/navigation'

export default function Clarity({ parentUrl }: BackNavigationProps) {
  useDocumentTitle('Clarity')
  return (
    <div className="min-h-screen bg-white">
      <BackNavigation parentUrl={parentUrl} invertColor={true} />
      <article className="max-w-4xl mx-auto p-8 text-gray-800">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Importing CSV Data into InfluxDB</h1>

        <section className="mb-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md">
            <h2 className="text-2xl font-semibold mb-2">Quick Start</h2>
            <p className="mb-2">Want to import your CSV data? Here's what you need to know:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Maximum file size: 25MB per upload</li>
              <li>Required format: Annotated CSV (don't worry, we'll show you how)</li>
              <li>Your data must be time-series oriented</li>
            </ul>
          </div>
        </section>


        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">CSV Format Requirements</h2>
          <h3 className="text-xl font-medium mb-2">Structure</h3>
          <p className="mb-2">Your CSV needs three types of rows in this specific order:</p>
          <ol className="list-decimal ml-6 space-y-1 mb-6">
            <li>Annotation Rows (3 required rows that describe your data)</li>
            <li>Header Row (names of your columns)</li>
            <li>Data Rows (your actual data)</li>
          </ol>

          <div className="bg-gray-50 p-4 rounded-md">
            <h4 className="text-lg font-medium mb-2">High Level Structure</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
              {`#Annotation row 1 - group
#Annotation row 2 - datatype
#Annotation row 3 - default
#Header row
Data row 1 or many`}
            </pre>
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <h4 className="text-lg font-medium mb-2">Example of a Valid CSV</h4>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
              {`#group,false,false,true,true,false,false,true,true,true
#datatype,string,long,dateTime:RFC3339,dateTime:RFC3339,dateTime:RFC3339,double,string,string,string
#default,mean,,,,,,,,
,result,table,_start,_stop,_time,_value,_field,_measurement,sensor_id
,,0,2024-01-01T00:00:00Z,2024-01-02T00:00:00Z,2024-01-01T12:30:00Z,23.5,temperature,enviroment_sensors,sensor_1`}
            </pre>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding the Structure</h2>

          <p>
            <div className="mt-4 bg-blue-50 p-4 rounded-md">
              <p className="font-medium">💡 Pro Tips:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Always start with the three annotation rows (they're not just comments!)</li>
                <li>Double-check your empty columns - they're easy to miss but crucial</li>
                <li>Create your bucket before uploading</li>
                <li>Verify your CSV format using our
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="text-blue-600 hover:underline">validation tool</a>
                </li>
                <li>For files &gt;25MB, consider using the
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="text-blue-600 hover:underline">Line Protocol</a> or splitting your files</li>
                <li>Use our
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="text-blue-600 hover:underline">Python script</a> to convert standard CSVs to InfluxDB format</li>
              </ul>
            </div>
          </p>
          <div className='mt-4'>
            <h3 className="text-xl font-medium mb-2">1. Annotation Rows</h3>
            <p className="mb-2">These rows provide metadata about the data your importing.
              Every CSV must start with three annotation rows, each starting with a #:</p>
            <ul className="list-disc ml-6 space-y-1 mb-6">
              <li><code className="bg-gray-100 px-2 py-1 rounded">#group</code> - Tells InfluxDB which columns are grouped together</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">#datatype</code> - Defines the data type for each column</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">#default</code> - Sets default values for columns</li>
            </ul>

            <h3 className="text-xl font-medium mb-2">2. Header Row</h3>
            <p className="mb-2">Must include these columns:</p>
            <ul className="list-disc ml-6 space-y-1 mb-4">
              <li><code className="bg-gray-100 px-2 py-1 rounded">leading comma (,)</code> - This aligns the header and following data with number of columns specified in the annotation rows</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">result</code> - Usually empty for imports</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">table</code> - Usually 0 for simple imports</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">_time</code> - When the measurement was taken</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">_value</code> - The actual measurement value <i>e.g. 23</i></li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">_field</code> - What type of measurement <i>e.g. temperature</i></li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">_measurement</code> - Category of measurement <i>e.g. environment_sensors</i></li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">tags</code> - Any additional information you wish to store can also be imported and will become tags for querying. Include as many as you like. Do not prefix these columns with an underscore.</li>
            </ul>
            <h3 className="text-xl font-medium mb-2">3. Data Row(s)</h3>
            <p className="mb-2">This is where you'll put your actual data. The number of columns must match the number of columns specified in the annotation rows.</p>
            <p className="mb-2">Generally you'll see two leading commas, one for alignment as per the header and one for the Result column.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Converting Your CSV</h2>

          <h3 className="text-xl font-medium mb-2">Before (Your typical CSV):</h3>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto mb-6">
            {`timestamp,sensor_id,location,value,reading_type
2024-01-01T12:30:00Z,sensor_1,room_a,23.5,temperature`}
          </pre>

          <h3 className="text-xl font-medium mb-2">After (InfluxDB Format):</h3>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
            {`#group,false,false,true,true,false,false,true,true,true
#datatype,string,long,dateTime:RFC3339,dateTime:RFC3339,dateTime:RFC3339,double,string,string,string
#default,mean,,,,,,,,
,result,table,_start,_stop,_time,_value,_field,_measurement,sensor_id
,,0,2024-01-01T00:00:00Z,2024-01-02T00:00:00Z,2024-01-01T12:30:00Z,23.5,temperature,environment_sensors,sensor_1`}
          </pre>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Issues and Solutions</h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md">
            <h3 className="text-xl font-medium mb-2">File Too Large</h3>
            <p className="mb-4">Split your file into chunks of 25MB or less</p>

            <h3 className="text-xl font-medium mb-2">Missing Annotation Data</h3>
            <p className="mb-4">Ensure you have all three # rows at the top of your file</p>

            <h3 className="text-xl font-medium mb-2">Wrong Number of Fields</h3>
            <p>Check that every row has the same number of columns</p>
          </div>
        </section>

        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <h4 className="text-lg font-semibold mb-2">Common Format Mistakes to Avoid</h4>

          <div className="space-y-4">
            <div>
              <p className="font-medium mb-2">❌ Wrong - Missing leading empty column</p>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
                {`#group,false,false,true,true,false,false,true,true,true
#datatype,string,long,dateTime:RFC3339,dateTime:RFC3339,dateTime:RFC3339,double,string,string,string
#default,mean,,,,,,,,
result,table,_start,_stop,_time,_value,_field,_measurement,sensor_id
0,2024-01-01T00:00:00Z,2024-01-02T00:00:00Z,2024-01-01T12:30:00Z,23.5,temperature,room_sensors,sensor_1`}
              </pre>
            </div>

            <div>
              <p className="font-medium mb-2">❌ Wrong - Missing empty 'result' column</p>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
                {`#group,false,false,true,true,false,false,true,true,true
#datatype,string,long,dateTime:RFC3339,dateTime:RFC3339,dateTime:RFC3339,double,string,string,string
#default,mean,,,,,,,,
,table,_start,_stop,_time,_value,_field,_measurement,sensor_id
0,2024-01-01T00:00:00Z,2024-01-02T00:00:00Z,2024-01-01T12:30:00Z,23.5,temperature,room_sensors,sensor_1`}
              </pre>
            </div>

            <div>
              <p className="font-medium mb-2">❌ Wrong - Missing annotation rows</p>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
                {`,result,table,_start,_stop,_time,_value,_field,_measurement,sensor_id
,,0,2024-01-01T00:00:00Z,2024-01-02T00:00:00Z,2024-01-01T12:30:00Z,23.5,temperature,room_sensors,sensor_1`}
              </pre>
            </div>

            <div>
              <p className="font-medium mb-2">✅ Correct - All required elements present</p>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
                {`#group,false,false,true,true,false,false,true,true,true
#datatype,string,long,dateTime:RFC3339,dateTime:RFC3339,dateTime:RFC3339,double,string,string,string
#default,mean,,,,,,,,
,result,table,_start,_stop,_time,_value,_field,_measurement,sensor_id
,,0,2024-01-01T00:00:00Z,2024-01-02T00:00:00Z,2024-01-01T12:30:00Z,23.5,temperature,room_sensors,sensor_1`}
              </pre>
            </div>
          </div>
        </div>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Need More Help?</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Check our{' '}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="text-blue-600 hover:underline">troubleshooting guide</a>
            </li>
            <li>Join our{' '}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="text-blue-600 hover:underline">community forum</a>
            </li>
            <li>View{' '}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="text-blue-600 hover:underline">example datasets</a>
            </li>
          </ul>
        </section>
      </article>
    </div>
  )
}