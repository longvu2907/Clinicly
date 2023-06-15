package controllers

import (
	"clinic-management/models"
	"clinic-management/types"
	"clinic-management/utils/query"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

type PatientRequest struct {
	FullName     string       `json:"full_name" binding:"required"`
	Gender       types.Gender `json:"gender" binding:"required,enum"`
	BirthDate    *time.Time   `json:"birth_date" binding:"required"`
	IdentityCard string       `json:"identity_card" binding:"required"`
	Address      string       `json:"address" binding:"required"`
	PhoneNumber  string       `json:"phone_number" binding:"required"`
	UpdatedBy    *uint        `json:"updated_by"`
}

type UpdatePatientRequest struct {
	FullName     string       `json:"full_name"`
	Gender       types.Gender `json:"gender,enum"`
	BirthDate    *time.Time   `json:"birth_date"`
	IdentityCard string       `json:"identity_card"`
	Address      string       `json:"address"`
	PhoneNumber  string       `json:"phone_number"`
	UpdatedBy    *uint        `json:"updated_by"`
}

type PatientResponse struct {
	Response
	Data models.Patient `json:"data"`
}

type PatientListResponse struct {
	Response
	Data []models.Patient `json:"data"`
}

// @Summary Get patient
// @Description Get patient
// @Tags patient
// @Produce json
// @Param name query string false "Patient name"
// @Param page query int false "Page" default(1)
// @Param page_size query int false "Page size" default(10)
// @Success 200 {object} PatientListResponse "Patient response"
// @Router /patient [get]
func GetPatient(c *gin.Context) {
	patients, err := models.GetPatient(query.Paginate(c),
		query.OrderBy("NgayTao", false),
		query.StringSearch("HoTen", c.Query("name")))
	if err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse(err.Error()))
		return
	}

	c.JSON(http.StatusOK, PatientListResponse{
		Response: SuccessfulResponse,
		Data:     patients,
	})
}

// @Summary Get patient by id
// @Description Get patient by id
// @Tags patient
// @Produce json
// @Param id path int true "Patient id"
// @Success 200 {object} PatientResponse "Patient response"
// @Router /patient/{id} [get]
func GetPatientByID(c *gin.Context) {
	id := c.Param("id")

	patient, err := models.GetPatientByID(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse(err.Error()))
		return
	}

	c.JSON(http.StatusOK, PatientResponse{
		Response: SuccessfulResponse,
		Data:     *patient,
	})
}

// @Summary Create patient
// @Description Create patient
// @Tags patient
// @Accept json
// @Produce json
// @Param data body PatientRequest true "Patient data"
// @Success 200 {object} PatientResponse "Patient response"
// @Router /patient [post]
func CreatePatient(c *gin.Context) {
	var input PatientRequest
	if err := c.ShouldBind(&input); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse(err.Error()))
		return
	}

	patient := models.Patient{
		FullName:     input.FullName,
		BirthDate:    input.BirthDate,
		Gender:       input.Gender.Value(),
		Address:      input.Address,
		IdentityCard: input.IdentityCard,
		PhoneNumber:  input.PhoneNumber,
		UpdatedBy:    input.UpdatedBy,
	}

	_, err := patient.Create()
	if err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse(err.Error()))
		return
	}

	c.JSON(http.StatusOK, PatientResponse{
		Response: SuccessfulResponse,
		Data:     patient,
	})
}

// @Summary Update patient
// @Description Update patient
// @Tags patient
// @Accept json
// @Produce json
// @Param id path int true "Patient id"
// @Param data body UpdatePatientRequest true "Patient data"
// @Success 200 {object} PatientResponse "Patient response"
// @Router /patient/{id} [put]
func UpdatePatient(c *gin.Context) {
	id := c.Param("id")

	var input UpdatePatientRequest
	if err := c.ShouldBind(&input); err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse(err.Error()))
		return
	}

	patient, err := models.GetPatientByID(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse(err.Error()))
		return
	}

	updatedPatient := models.Patient{
		FullName:     input.FullName,
		BirthDate:    input.BirthDate,
		Gender:       input.Gender.Value(),
		Address:      input.Address,
		IdentityCard: input.IdentityCard,
		PhoneNumber:  input.PhoneNumber,
		UpdatedBy:    input.UpdatedBy,
	}

	patient, err = patient.Update(updatedPatient)
	if err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse(err.Error()))
		return
	}

	c.JSON(http.StatusOK, PatientResponse{
		Response: SuccessfulResponse,
		Data:     *patient,
	})
}

// @Summary Delete patient
// @Description Delete patient
// @Tags patient
// @Produce json
// @Param id path int true "Patient id"
// @Success 200 {object} PatientResponse "Patient response"
// @Router /patient/{id} [delete]
func DeletePatient(c *gin.Context) {
	id := c.Param("id")

	patient, err := models.GetPatientByID(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse(err.Error()))
		return
	}

	patient, err = patient.Delete()
	if err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse(err.Error()))
		return
	}

	c.JSON(http.StatusOK, PatientResponse{
		Response: SuccessfulResponse,
		Data:     *patient,
	})
}

// @Summary Get patient enums
// @Description Get patient enums
// @Tags patient
// @Produce json
// @Router /patient/enums [get]
func GetPatientEnums(c *gin.Context) {
	response := SuccessfulResponse

	response.Data = types.PatientEnums

	c.JSON(http.StatusOK, response)
}
