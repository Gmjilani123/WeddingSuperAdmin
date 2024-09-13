

function InnerLanguage() {
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="card">
            <div className="card-header row gutters-5">
              <div className="col text-center text-md-left">
                <h5 className="mb-md-0 h6">English</h5>
              </div>
              <div className="col-md-4">
                <form className id="sort_keys" action method="GET">
                  <div className="input-group input-group-sm">
                    <input type="text" className="form-control" id="search" name="search" placeholder="Type key & Enter" />
                  </div>
                </form>
              </div>
            </div>
            <form action="https://weddemoadmin.abaris.in/admin/languages/key_value_store" method="POST">
              <input type="hidden" name="_token" defaultValue="V3eUAFlZ4RZMMqWQoLNyu8KJ5Be77CCNc7fweveP" />      <input type="hidden" name="id" defaultValue={1} />
              <div className="card-body">
                <table className="table table-striped table-bordered demo-dt-basic" id="tranlation-table" cellSpacing={0} width="100%">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th width="45%">Key</th>
                      <th width="45%">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className="key">Select File</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Select File]" defaultValue="Select File" />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td className="key">Upload New</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Upload New]" defaultValue="Upload New" />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td className="key">Sort by newest</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Sort by newest]" defaultValue="Sort by newest" />
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td className="key">Sort by oldest</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Sort by oldest]" defaultValue="Sort by oldest" />
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td className="key">Sort by smallest</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Sort by smallest]" defaultValue="Sort by smallest" />
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td className="key">Sort by largest</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Sort by largest]" defaultValue="Sort by largest" />
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td className="key">Selected Only</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Selected Only]" defaultValue="Selected Only" />
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td className="key">No files found</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[No files found]" defaultValue="No files found" />
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td className="key">0 File selected</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[0 File selected]" defaultValue="0 File selected" />
                      </td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td className="key">Clear</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Clear]" defaultValue="Clear" />
                      </td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td className="key">Prev</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Prev]" defaultValue="Prev" />
                      </td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td className="key">Next</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Next]" defaultValue="Next" />
                      </td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td className="key">Add Files</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Add Files]" defaultValue="Add Files" />
                      </td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td className="key">First name is required</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[First name is required]" defaultValue="First name is required" />
                      </td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td className="key">Max 255 characters</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Max 255 characters]" defaultValue="Max 255 characters" />
                      </td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td className="key">Email is required</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Email is required]" defaultValue="Email is required" />
                      </td>
                    </tr>
                    <tr>
                      <td>17</td>
                      <td className="key">Email Should be unique</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Email Should be unique]" defaultValue="Email Should be unique" />
                      </td>
                    </tr>
                    <tr>
                      <td>18</td>
                      <td className="key">Gender is required</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Gender is required]" defaultValue="Gender is required" />
                      </td>
                    </tr>
                    <tr>
                      <td>19</td>
                      <td className="key">Max 20 characters</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Max 20 characters]" defaultValue="Max 20 characters" />
                      </td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td className="key">On behalf is required</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[On behalf is required]" defaultValue="On behalf is required" />
                      </td>
                    </tr>
                    <tr>
                      <td>21</td>
                      <td className="key">Package is required</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Package is required]" defaultValue="Package is required" />
                      </td>
                    </tr>
                    <tr>
                      <td>22</td>
                      <td className="key">Min 8 characters</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Min 8 characters]" defaultValue="Min 8 characters" />
                      </td>
                    </tr>
                    <tr>
                      <td>23</td>
                      <td className="key">Password and Confirm password are required</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Password and Confirm password are required]" defaultValue="Password and Confirm password are required" />
                      </td>
                    </tr>
                    <tr>
                      <td>24</td>
                      <td className="key">Password and Confirmed password did not matched</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Password and Confirmed password did not matched]" defaultValue="Password and Confirmed password did not matched" />
                      </td>
                    </tr>
                    <tr>
                      <td>25</td>
                      <td className="key">Max 8 characters</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Max 8 characters]" defaultValue="Max 8 characters" />
                      </td>
                    </tr>
                    <tr>
                      <td>26</td>
                      <td className="key">Name is required</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Name is required]" defaultValue="Name is required" />
                      </td>
                    </tr>
                    <tr>
                      <td>27</td>
                      <td className="key">Package Price is required</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Package Price is required]" defaultValue="Package Price is required" />
                      </td>
                    </tr>
                    <tr>
                      <td>28</td>
                      <td className="key">Express Interest is required</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Express Interest is required]" defaultValue="Express Interest is required" />
                      </td>
                    </tr>
                    <tr>
                      <td>29</td>
                      <td className="key">Direct message is required</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Direct message is required]" defaultValue="Direct message is required" />
                      </td>
                    </tr>
                    <tr>
                      <td>30</td>
                      <td className="key">Photo gallery is required</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Photo gallery is required]" defaultValue="Photo gallery is required" />
                      </td>
                    </tr>
                    <tr>
                      <td>31</td>
                      <td className="key">Package Validity day is required</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Package Validity day is required]" defaultValue="Package Validity day is required" />
                      </td>
                    </tr>
                    <tr>
                      <td>32</td>
                      <td className="key">Premium Packages</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Premium Packages]" defaultValue="Premium Packages" />
                      </td>
                    </tr>
                    <tr>
                      <td>33</td>
                      <td className="key">Add New Package</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Add New Package]" defaultValue="Add New Package" />
                      </td>
                    </tr>
                    <tr>
                      <td>34</td>
                      <td className="key">Package Logo</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Package Logo]" defaultValue="Package Logo" />
                      </td>
                    </tr>
                    <tr>
                      <td>35</td>
                      <td className="key">Product Upload</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Product Upload]" defaultValue="Product Upload" />
                      </td>
                    </tr>
                    <tr>
                      <td>36</td>
                      <td className="key">Edit</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Edit]" defaultValue="Edit" />
                      </td>
                    </tr>
                    <tr>
                      <td>37</td>
                      <td className="key">Delete</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Delete]" defaultValue="Delete" />
                      </td>
                    </tr>
                    <tr>
                      <td>38</td>
                      <td className="key">Admin Sign In</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Admin Sign In]" defaultValue="Admin Sign In" />
                      </td>
                    </tr>
                    <tr>
                      <td>39</td>
                      <td className="key">Admin Sign In</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Admin Sign In]" defaultValue="Admin Sign In" />
                      </td>
                    </tr>
                    <tr>
                      <td>40</td>
                      <td className="key">Email</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Email]" defaultValue="Email" />
                      </td>
                    </tr>
                    <tr>
                      <td>41</td>
                      <td className="key">Email</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Email]" defaultValue="Email" />
                      </td>
                    </tr>
                    <tr>
                      <td>42</td>
                      <td className="key">Password</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Password]" defaultValue="Password" />
                      </td>
                    </tr>
                    <tr>
                      <td>43</td>
                      <td className="key">Forgot Your Password?</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Forgot Your Password?]" defaultValue="Forgot Your Password?" />
                      </td>
                    </tr>
                    <tr>
                      <td>44</td>
                      <td className="key">Sign In</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Sign In]" defaultValue="Sign In" />
                      </td>
                    </tr>
                    <tr>
                      <td>45</td>
                      <td className="key">Dashboard</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Dashboard]" defaultValue="Dashboard" />
                      </td>
                    </tr>
                    <tr>
                      <td>46</td>
                      <td className="key">Members</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Members]" defaultValue="Members" />
                      </td>
                    </tr>
                    <tr>
                      <td>47</td>
                      <td className="key">Free Members</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Free Members]" defaultValue="Free Members" />
                      </td>
                    </tr>
                    <tr>
                      <td>48</td>
                      <td className="key">Premium Members</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Premium Members]" defaultValue="Premium Members" />
                      </td>
                    </tr>
                    <tr>
                      <td>49</td>
                      <td className="key">Bulk Member Add</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Bulk Member Add]" defaultValue="Bulk Member Add" />
                      </td>
                    </tr>
                    <tr>
                      <td>50</td>
                      <td className="key">Deleted Members</td>
                      <td>
                        <input type="text" className="form-control value" style={{ width: '100%' }} name="values[Deleted Members]" defaultValue="Deleted Members" />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="aiz-pagination">

                </div>
                <div className="form-group mb-0 text-right">
                  <button type="button" className="btn btn-primary mr-2" onclick="copyTranslation()">Copy Translations</button>
                  <button type="submit" className="btn btn-primary">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Footer */}
      </div>

    </>
  )
}
export default InnerLanguage