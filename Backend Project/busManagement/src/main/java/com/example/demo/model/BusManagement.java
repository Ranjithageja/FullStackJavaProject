package com.example.demo.model;

/*In this project we are creating the bus management like red bus.
 *  In this, we can create the bus details, display the details, display the bus details in 
 *  which bus id we want to see,update the bus details in which bus id we want to see and deleting the particular id*/


import java.util.Scanner;

import org.hibernate.annotations.DynamicUpdate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

/*here we take the attributes in the private access modifier
 * so that to access the attributes by public getters and setters method  */


/*@Entity(default)- A Class can be mapped to a table
 * @Table- Specifies the table name
 * @Dynamic Update- Updates the particular value to the attribute which we want to change instead of checking all the attributes.
 * @Id-Considers as a primary key
 * @Generated value(strategy=GenerationType.IDENTITY)- automatically generates the primary key values.
 * @Column-Specifies the column name*/

@Entity
@DynamicUpdate

public class BusManagement {
	

		/* scanner object private to this class is created to accept userInput */
		private static final Scanner scan=new Scanner(System.in);
		public BusManagement() {

		}

		private String startingPoint;
		private String endingPoint;
		private String driverName;
		private Long driverNumber;
		private int noOfSeats;
		private int bookedSeats;
		private int costPerSeats;
		private int totalprice;
	

			public int getBookedSeats() {
			return bookedSeats;
		}

		public void setBookedSeats(int bookedSeats) {
			this.bookedSeats = bookedSeats;
		}

		public int getTotalprice() {
			return totalprice;
		}

		public void setTotalprice(int totalprice) {
			this.totalprice = totalprice;
		}

		public int getNoOfSeats() {
			return noOfSeats;
		}

		public void setNoOfSeats(int noOfSeats) {
			this.noOfSeats = noOfSeats;
		}

		public int getCostPerSeats() {
			return costPerSeats;
		}

		public void setCostPerSeats(int costPerSeats) {
			this.costPerSeats = costPerSeats;
		}

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		//@Column(name="Bus_number",length=10,unique=true)
		private int  busId;
		public int  getBusId() {
			return busId;
		}

		/*public void setBusId(Integer busId) {
			this.busId = busId;
		}*/

		private String busNumber;
		private String busType;
		
		public String getStartingpoint() {
			return startingPoint;
		}

		public String getStartingPoint() {
			return startingPoint;
		}
		public void setStartingPoint(String startingPoint) {
			this.startingPoint = startingPoint;
		}
		public String getEndingPoint() {
			return endingPoint;
		}
		public void setEndingPoint(String endingPoint) {
			this.endingPoint = endingPoint;
		}
		public String getDriverName() {
			return driverName;
		}
		public void setDriverName(String driverName) {
			this.driverName = driverName;
		}
		public Long getDriverNumber() {
			return driverNumber;
		}
		
		public void setDriverNumber(Long driverNumber) {
			this.driverNumber = driverNumber;
		}
		
	   public String getBusNumber() {
			return busNumber;
		}
		public void setBusNumber(String busNumber) {
			this.busNumber = busNumber;
		}
		public String getBusType() {
			return busType;
		}
		public void setBusType(String busType) {
			this.busType = busType;

	}

		@Override
		public String toString() {
			return "BusManagement [startingPoint=" + startingPoint + ", endingPoint=" + endingPoint + ", driverName="
					+ driverName + ", driverNumber=" + driverNumber + ", noOfSeats=" + noOfSeats + ", bookedSeats="
					+ bookedSeats + ", costPerSeats=" + costPerSeats + ", totalprice=" + totalprice + ", busId=" + busId
					+ ", busNumber=" + busNumber + ", busType=" + busType + "]";
		}

		
	
		

	
		
		
		}
	




