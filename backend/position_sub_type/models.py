from django.db import models
from position_type.models import PositionType

# Create your models here.
class PositionSubTypeManager(models.Manager):
  def get_queryset(self):
    return super(PositionSubTypeManager, self).get_queryset().filter(active=True)

class PositionSubType(models.Model):
  ### Relation with user
  position_type = models.ForeignKey(PositionType, related_name='position_sub_types', on_delete=models.CASCADE)

  name = models.CharField(blank=False, max_length=50)

  def __str__(self):
    return self.position_type.name + ' -> ' + self.name

  class Meta:
    db_table = "position_sub_type"
    ordering = ('position_type', 'name')
    managed = True
    unique_together = ('name', 'id')