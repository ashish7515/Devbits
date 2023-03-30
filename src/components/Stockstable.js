const people = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image: 'https://bit.ly/33HnjK0',
  },
  {
    name: 'John Doe',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Tester',
    email: 'john.doe@example.com',
    image: 'https://bit.ly/3I9nL2D',
  },
  {
    name: 'Veronica Lodge',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: ' Software Engineer',
    email: 'veronica.lodge@example.com',
    image: 'https://bit.ly/3vaOTe1',
  },
  {
    name: 'Veronica Lodge',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: ' Software Engineer',
    email: 'veronica.lodge@example.com',
    image: 'https://bit.ly/3vaOTe1',
  },
  {
    name: 'Veronica Lodge',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: ' Software Engineer',
    email: 'veronica.lodge@example.com',
    image: 'https://bit.ly/3vaOTe1',
  },
  {
    name: 'Veronica Lodge',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: ' Software Engineer',
    email: 'veronica.lodge@example.com',
    image: 'https://bit.ly/3vaOTe1',
  }
  // More people...
];

export default function Stocktable() {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Stock Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Company
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Stocks Own
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Buy
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Sell
                  </th>
                  {/* <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th> */}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map(person => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {/* <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                          </div> */}
                        <div className="ml-0">
                          <div className="text font-medium text-gray-900">{person.name}</div>
                          {/* <div className="text-sm text-gray-500">{person.email}</div> */}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.title}</div>
                      <div className="text-sm text-gray-500">USD</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">50</div>
                      {/* <span
                          className="px-2 inline-flex text-xs leading-5
                        font-semibold rounded-full bg-green-100 text-green-800"
                        >
                          Active
                        </span> */}
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.role}
                      </td> */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Click Me
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Click Me
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}