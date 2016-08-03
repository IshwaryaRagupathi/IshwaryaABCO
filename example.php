<html>
	<body>
		<?php   
			$conn = mysqli_connect("localhost", "root", "", "task_1");
			if(!$conn){
				echo " Connection failed";
			}
			$q = $_REQUEST["q"];	
			echo $q ;
			$sql = 'SELECT * FROM employeeinfo WHERE EmployeeName LIKE "' . $q . '%"';
			$result = mysqli_query($conn,$sql);
			echo "<table>
			<tr>
				<th>EmployeID</th>
				<th>EmployeeName</th>
				<th>Designation</th>
				<th>DOB</th>
				<th>Extention</th>
			</tr>";
			while($row = mysqli_fetch_array($result)) {
    			echo "<tr>";
    			echo "<td>" . $row['EmployeeID'] . "</td>";
    			echo "<td>" . $row['EmployeeName'] . "</td>";
    			echo "<td>" . $row['Designation'] . "</td>";
    			echo "<td>" . $row['DOB'] . "</td>";
    			echo "<td>" . $row['Extension'] . "</td>";
    			echo "</tr>";
			}
			echo "</table>";
			$conn->close();
		?>
	</body>
</html>