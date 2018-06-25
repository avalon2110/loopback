angular
  .module('myApp')
  .controller('UsersController', UsersController);

function UsersController($scope, $http, $filter, $route) {
  var vm = this;

  vm.fullInfoGridOptions = {
    dataSource: {
      pageSize: 5,
      transport: {
        read: function (e) {
          $http.get('http://localhost:8000/api/users_info')
          .then(function success(response) {
            response.data.forEach(function (item) {
              item.hiredate = $filter('date')(item.hiredate, "MM/dd/yyyy");
              item.previousjobs = item.previousjobs.map(el => el.concat(',\n')).join("");
              item.previousjobstitles = item.previousjobstitles.map(el => el.concat(',\n')).join("");
            });
            e.success(response.data);
          }, function error(response) {
            alert('something went wrong')
            console.log(response);
          })
        }
      }
    },
    pageable: true,
    dataBound: function() {
      this.expandRow(this.tbody.find("tr.k-master-row").first());
    },
    columns: [
      {
        field: "id",
        title: "ID",
        width: "50px"
      },
      {
        field: "username",
        title: "User Name"
      },
      {
        field: "firstname",
        title: "Firsn Name"
      },
      {
        field: "lastname",
        title: "Last Name"
      },
      {
        field: "hiredate",
        title: "Date of hiring"
      },
      {
        field: "job",
        title: "Job"
      },
      {
        field: "previousjobs",
        title: "Previous Jobs"
      },
      {
        field: "previousjobstitles",
        title: "Previous Job Titles"
      }
    ]
  };
  vm.mainGridOptions = {
    dataSource: {
      pageSize: 5,
      transport: {
        read: function (e) {
          $http.get('http://localhost:8000/api/employees')
          .then(function success(response) {
            response.data.forEach(function (item) {
              item.hiredate = $filter('date')(item.hiredate, "MM/dd/yyyy");
            });
            e.success(response.data);
          }, function error(response) {
            alert('something went wrong')
            console.log(response);
          })
        }
      }
    },
    pageable: true,
    dataBound: function() {
      this.expandRow(this.tbody.find("tr.k-master-row").first());
    },
    columns: [
      {
        field: "id",
        title: "ID",
        width: "50px"
      },
      {
        field: "username",
        title: "User Name"
      },
      {
        field: "firstname",
        title: "Firsn Name"
      },
      {
        field: "lastname",
        title: "Last Name"
      },
      {
        field: "hiredate",
        title: "Date of hiring"
      },
      {
        field: "job",
        title: "Job"
      }
    ]
  };

  vm.deleteItem = function (id) {
    $http.delete("http://localhost:8000/api/employees/" + id)
      .then((res) => {
        $route.reload();
      })
      .catch(err => console.log(err))
  }

  vm.updateItem = function (item) {
    $http.put("http://localhost:8000/api/employees/", item)
      .then((res) => {
        $route.reload();
      })
      .catch(err => console.log(err))
  }

  vm.addItem = function (item) {
    $http.post("http://localhost:8000/api/employees/", item)
      .then((res) => {
        console.log(res);
        $route.reload();
      })
      .catch(err => console.log(err))
  }
}
